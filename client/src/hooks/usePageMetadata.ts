import { useEffect } from 'react';
import { useLocation } from 'react-router';

import staticMetadata from 'public/static_metadata.json';

export type PageMetadata = {
  title?: string;
  description?: string;
  image?: string;
};

type PathMetadata = PageMetadata & { path: string };

/** Same defaults and per-path values the Flask server uses for link previews (public/static_metadata.json). */
function metadataForPath(pathname: string): Required<PageMetadata> {
  const path = pathname.replace(/^\/+|\/+$/g, '');
  const match = (staticMetadata.paths as PathMetadata[]).find((p) => p.path === path);
  return { ...staticMetadata.default, ...stripEmpty(match ?? {}) };
}

function stripEmpty(meta: PageMetadata): PageMetadata {
  return Object.fromEntries(Object.entries(meta).filter(([key, value]) => key !== 'path' && value)) as PageMetadata;
}

function apply(meta: Required<PageMetadata>) {
  document.title = meta.title;
  for (const element of document.getElementsByTagName('meta')) {
    const name = element.getAttribute('name') || element.getAttribute('property');
    if (!name) continue;
    if (name.includes('title')) element.setAttribute('content', meta.title);
    else if (name.includes('description')) element.setAttribute('content', meta.description);
    else if (name.includes('image')) element.setAttribute('content', meta.image);
  }
}

/** Sets the title and meta tags for the current route. Used once, by the layout. */
export function useRouteMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    apply(metadataForPath(pathname));
  }, [pathname]);
}

/** Overrides the route's metadata for one page, e.g. a product. Pass undefined while the data loads. */
export function usePageMetadata(meta: PageMetadata | undefined) {
  const { pathname } = useLocation();
  const title = meta?.title;
  const description = meta?.description;
  const image = meta?.image;
  useEffect(() => {
    if (!title && !description && !image) return;
    apply({ ...metadataForPath(pathname), ...stripEmpty({ title, description, image }) });
  }, [pathname, title, description, image]);
}
