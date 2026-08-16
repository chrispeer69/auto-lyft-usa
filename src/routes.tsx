import type { RouteObject } from 'react-router-dom';
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

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <ServicesIndex /> },
      { path: 'services/:slug', element: <ServicePage /> },
      { path: 'service-areas', element: <ServiceAreasIndex /> },
      { path: 'service-area/:slug', element: <CityPage /> },
      { path: 'auto-repair', element: <AutoRepairIndex /> },
      { path: 'auto-repair/:slug', element: <AutoRepairPage /> },
      { path: 'vip-program', element: <VipProgram /> },
      { path: 'quote', element: <Quote /> },
      { path: 'sos', element: <Sos /> },
      { path: 'blog', element: <BlogIndex /> },
      { path: 'blog/:slug', element: <BlogPostPage /> },
      { path: 'privacy-policy', element: <LegalPage kind="privacy" /> },
      { path: 'terms-of-service', element: <LegalPage kind="terms" /> },
      { path: 'accessibility', element: <LegalPage kind="accessibility" /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];
