/**
 * Collects the head tags for the page currently being rendered on the server.
 *
 * renderToString is synchronous and single-threaded, so a module-level slot is
 * safe here: the prerender script resets it, renders one route, then reads the
 * result back before moving to the next route.
 */
export type HeadData = {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  schema?: object | object[];
};

let current: HeadData | null = null;

export const resetHead = () => {
  current = null;
};

export const setHead = (data: HeadData) => {
  current = data;
};

export const getHead = () => current;

export const isServer = typeof window === 'undefined';
