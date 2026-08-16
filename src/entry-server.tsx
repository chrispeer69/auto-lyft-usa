import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import ServicesIndex from './pages/ServicesIndex';
import ServicePage from './pages/ServicePage';
import ServiceAreasIndex from './pages/ServiceAreasIndex';
import CityPage from './pages/CityPage';
import AutoRepairIndex from './pages/AutoRepairIndex';
import AutoRepairPage from './pages/AutoRepairPage';
import VipProgram from './pages/VipProgram';
import Quote from './pages/Quote';
import Sos from './pages/Sos';
import BlogIndex from './pages/BlogIndex';
import BlogPostPage from './pages/BlogPostPage';
import LegalPage from './pages/LegalPage';
import NotFound from './pages/NotFound';
import { getHead, resetHead } from './seoHead';

/**
 * Mirrors src/routes.tsx using the non-data router, which is what
 * StaticRouter needs. Keep the two in sync when adding a route.
 */
function ServerApp() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="services" element={<ServicesIndex />} />
        <Route path="services/:slug" element={<ServicePage />} />
        <Route path="service-areas" element={<ServiceAreasIndex />} />
        <Route path="service-area/:slug" element={<CityPage />} />
        <Route path="auto-repair" element={<AutoRepairIndex />} />
        <Route path="auto-repair/:slug" element={<AutoRepairPage />} />
        <Route path="vip-program" element={<VipProgram />} />
        <Route path="quote" element={<Quote />} />
        <Route path="sos" element={<Sos />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="privacy-policy" element={<LegalPage kind="privacy" />} />
        <Route path="terms-of-service" element={<LegalPage kind="terms" />} />
        <Route path="accessibility" element={<LegalPage kind="accessibility" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export function render(url: string) {
  resetHead();
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <ServerApp />
      </StaticRouter>
    </StrictMode>
  );
  return { html, head: getHead() };
}
