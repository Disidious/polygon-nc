import { useState } from 'react';
import { Link, useSearchParams } from 'react-router';

import { getCategories, type MasterCategory } from '@/api';
import { shopHref } from '@/components/shop/shopUrl';
import Icon from '@/components/ui/Icon';
import Skeleton from '@/components/ui/Skeleton';
import StatusMessage from '@/components/ui/StatusMessage';
import { useApi } from '@/hooks/useApi';
import { cx } from '@/utils/cx';
import style from './style.module.css';

const CATEGORY_KEYS = { categoryid: null, mastercategoryid: null, category: null, page: null };

/** The Categories box: "All", then each main category with its subcategories. A closed box on phones. */
function CategoryList() {
  const [params] = useSearchParams();
  const categories = useApi((signal) => getCategories(signal), []);
  const [openOnPhone, setOpenOnPhone] = useState(false);
  const categoryId = params.get('categoryid');
  const masterId = categoryId ? null : params.get('mastercategoryid');
  const allSelected = !categoryId && !masterId;
  const currentName = allSelected ? 'All' : params.get('category') || 'All';

  return (
    <aside className={cx(style.box, openOnPhone && style.open)}>
      <button type="button" className={style.toggle} aria-expanded={openOnPhone} onClick={() => setOpenOnPhone((open) => !open)}>
        Categories
        <span className={style.current}>{currentName}</span>
        <Icon name="chevronDown" size={22} />
      </button>
      <h2 className={style.heading}>Categories</h2>

      <div className={style.body}>
        {categories.status === 'loading' && (
          <div aria-busy="true" aria-label="Loading categories">
            {['62%', '48%', '40%', '34%', '30%', '44%', '36%', '28%'].map((width, i) => (
              <Skeleton key={i} width={width} height={14} className={cx(style.skeletonRow, i % 3 !== 0 && style.skeletonSub)} />
            ))}
          </div>
        )}
        {categories.status === 'error' && (
          <StatusMessage icon="error" title="Couldn't load categories." action={{ label: 'Try again', onClick: categories.reload }} />
        )}
        {categories.status === 'success' && (
          <>
            <Link to={shopHref(params, CATEGORY_KEYS)} className={cx(style.link, style.master, allSelected && style.on)} onClick={() => setOpenOnPhone(false)}>
              All
            </Link>
            {categories.data.map((master) => (
              <MasterGroup key={master.id} master={master} params={params} selectedMaster={masterId} selectedCategory={categoryId} onPick={() => setOpenOnPhone(false)} />
            ))}
          </>
        )}
      </div>
    </aside>
  );
}

type GroupProps = {
  master: MasterCategory;
  params: URLSearchParams;
  selectedMaster: string | null;
  selectedCategory: string | null;
  onPick: () => void;
};

function MasterGroup({ master, params, selectedMaster, selectedCategory, onPick }: GroupProps) {
  const [expanded, setExpanded] = useState(true);
  const masterHref = shopHref(params, { ...CATEGORY_KEYS, mastercategoryid: String(master.id), category: master.name });

  return (
    <div>
      <div className={style.row}>
        <Link to={masterHref} className={cx(style.link, style.master, selectedMaster === String(master.id) && style.on)} onClick={onPick}>
          {master.name}
        </Link>
        <button
          type="button"
          className={cx(style.expand, !expanded && style.collapsed)}
          aria-expanded={expanded}
          aria-label={`${expanded ? 'Collapse' : 'Expand'} ${master.name}`}
          onClick={() => setExpanded((value) => !value)}
        >
          <Icon name="chevronDown" size={22} />
        </button>
      </div>
      <div className={cx(style.sub, !expanded && style.subClosed)}>
        <div>
          <div className={style.subInner}>
            {master.categories.map((category) => (
              <Link
                key={category.id}
                to={shopHref(params, { ...CATEGORY_KEYS, categoryid: String(category.id), category: category.name })}
                className={cx(style.link, style.subLink, selectedCategory === String(category.id) && style.on)}
                onClick={onPick}
                tabIndex={expanded ? undefined : -1}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
