import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import './index.css';

const router = createBrowserRouter(routes);

const app = (
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

const container = document.getElementById('root')!;

// Pages are prerendered to static HTML at build time, so hydrate rather than
// re-render — that keeps the visible content stable instead of flashing.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
