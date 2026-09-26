import { useEffect, useState, type FormEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

import { shopHref } from '@/components/shop/shopUrl';
import Icon from '@/components/ui/Icon';
import style from './style.module.css';

function SearchBar() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const fromUrl = params.get('search') ?? '';
  const [text, setText] = useState(fromUrl);

  // Follow the URL when it changes some other way (back/forward, category links).
  useEffect(() => {
    setText(fromUrl);
  }, [fromUrl]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const search = text.trim();
    navigate(shopHref(params, { search: search || null, page: null }));
  };

  return (
    <form className={style.search} role="search" onSubmit={submit}>
      <input
        className={style.input}
        type="search"
        placeholder="Search..."
        aria-label="Search products"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit" className={style.button} aria-label="Search">
        <Icon name="search" size={22} />
      </button>
    </form>
  );
}

export default SearchBar;
