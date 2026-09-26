import { useCallback, useEffect, useLayoutEffect, useRef, useState, type PointerEvent } from 'react';
import { Link } from 'react-router';

import { getCategoryHighlights, type CategoryHighlight } from '@/api';
import Icon from '@/components/ui/Icon';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Skeleton from '@/components/ui/Skeleton';
import StatusMessage from '@/components/ui/StatusMessage';
import { useApi } from '@/hooks/useApi';
import { cx } from '@/utils/cx';
import style from './style.module.css';

const AUTOPLAY_MS = 3000;
const SLIDE_MS = 500;
const SWIPE_PX = 40;

const shopLink = (category: CategoryHighlight) =>
  `/shop?${new URLSearchParams({ categoryid: String(category.id), category: category.name })}`;

/** Home page "Shop Categories" slideshow. Hidden when the shop has no categories to show. */
function CategorySlider() {
  const categories = useApi((signal) => getCategoryHighlights(signal), []);

  if (categories.status === 'success' && categories.data.length === 0) return null;

  return (
    <Section>
      {categories.status === 'success' ? (
        <Carousel items={categories.data} />
      ) : (
        <>
          <Head arrows={categories.status === 'loading'} />
          {categories.status === 'loading' ? (
            <div className={style.viewport} aria-busy="true" aria-label="Loading categories">
              <div className={style.track}>
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i} className={style.slide}>
                    <div className={cx(style.card, style.placeholder)}>
                      <div className={style.image}><Skeleton width="100%" height="100%" radius={10} /></div>
                      <div className={style.body}><Skeleton width="45%" height={14} /><Skeleton width="22%" height={12} /></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className={style.errorBox}>
              <StatusMessage icon="error" title="Couldn't load categories." action={{ label: 'Try again', onClick: categories.reload }} />
            </div>
          )}
        </>
      )}
    </Section>
  );
}

function Head({ arrows, onPrev, onNext }: { arrows: boolean; onPrev?: () => void; onNext?: () => void }) {
  return (
    <div className={style.head}>
      <SectionTitle eyebrow="From the shop" className={style.title}>Shop Categories</SectionTitle>
      {arrows && (
        <div className={style.arrows}>
          <button type="button" className={style.arrow} onClick={onPrev} disabled={!onPrev} aria-label="Previous categories">
            <Icon name="chevronLeft" size={22} />
          </button>
          <button type="button" className={style.arrow} onClick={onNext} disabled={!onNext} aria-label="Next categories">
            <Icon name="chevronRight" size={22} />
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * Endless slideshow: slides one card, then moves the first card to the end (and the reverse for "previous"),
 * so it never runs out. `first` is the index of the leftmost visible category.
 */
function Carousel({ items }: { items: CategoryHighlight[] }) {
  const count = items.length;
  const [first, setFirst] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const busy = useRef(false);
  const pending = useRef<'next' | 'prev' | null>(null);
  const swipe = useRef<{ x: number; moved: boolean } | null>(null);

  const ordered = Array.from({ length: count }, (_, k) => items[(first + k) % count]);
  const slideWidth = () => trackRef.current?.firstElementChild?.getBoundingClientRect().width ?? 0;
  const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const next = useCallback(() => {
    const track = trackRef.current;
    if (!track || busy.current || count < 2) return;
    busy.current = true;
    pending.current = 'next';
    if (reduceMotion()) {
      setFirst((f) => (f + 1) % count);
      return;
    }
    track.style.transition = `transform ${SLIDE_MS}ms ease`;
    track.style.transform = `translateX(${-slideWidth()}px)`;
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setFirst((f) => (f + 1) % count);
    };
    track.addEventListener('transitionend', finish, { once: true });
    setTimeout(finish, SLIDE_MS + 100); // in case transitionend never fires (hidden tab)
  }, [count]);

  const prev = useCallback(() => {
    if (busy.current || count < 2) return;
    busy.current = true;
    pending.current = reduceMotion() ? 'next' : 'prev';
    setFirst((f) => (f - 1 + count) % count);
  }, [count]);

  const goTo = (index: number) => {
    if (busy.current) return;
    pending.current = null;
    setFirst(index);
  };

  // After the list is re-ordered: "next" snaps back to 0; "prev" starts one card left and slides in.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (pending.current === 'prev') {
      track.style.transition = 'none';
      track.style.transform = `translateX(${-slideWidth()}px)`;
      void track.offsetWidth;
      track.style.transition = `transform ${SLIDE_MS}ms ease`;
      track.style.transform = 'translateX(0)';
      const release = () => {
        busy.current = false;
      };
      track.addEventListener('transitionend', release, { once: true });
      setTimeout(release, SLIDE_MS + 100);
    } else {
      track.style.transition = 'none';
      track.style.transform = 'translateX(0)';
      busy.current = false;
    }
    pending.current = null;
  }, [first]);

  useEffect(() => {
    if (paused || count < 2) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, next, count]);

  const onPointerDown = (event: PointerEvent) => {
    swipe.current = { x: event.clientX, moved: false };
    setPaused(true);
  };
  const onPointerMove = (event: PointerEvent) => {
    if (swipe.current && Math.abs(event.clientX - swipe.current.x) > 10) swipe.current.moved = true;
  };
  const onPointerUp = (event: PointerEvent) => {
    const start = swipe.current;
    if (!start) return;
    const dx = event.clientX - start.x;
    if (dx < -SWIPE_PX) next();
    else if (dx > SWIPE_PX) prev();
    if (event.pointerType !== 'mouse') setPaused(false);
    // Keep `moved` until the click that follows a drag has been blocked.
    setTimeout(() => {
      swipe.current = null;
    }, 0);
  };

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Head arrows onPrev={prev} onNext={next} />
      <div
        className={style.viewport}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          swipe.current = null;
          setPaused(false);
        }}
        onClickCapture={(event) => {
          if (swipe.current?.moved) event.preventDefault();
        }}
      >
        <div ref={trackRef} className={style.track}>
          {ordered.map((category) => (
            <div key={category.id} className={style.slide}>
              <Link to={shopLink(category)} className={style.card} draggable={false}>
                <div className={style.image}>
                  <img src={category.image} alt={category.name} draggable={false} loading="lazy" />
                </div>
                <div className={style.body}>
                  <b>{category.name}</b>
                  <span>Browse →</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={style.dots}>
        {items.map((category, index) => (
          <button
            key={category.id}
            type="button"
            className={cx(style.dot, index === first && style.dotOn)}
            onClick={() => goTo(index)}
            aria-label={`Show ${category.name}`}
            aria-current={index === first || undefined}
          />
        ))}
      </div>
    </div>
  );
}

export default CategorySlider;
