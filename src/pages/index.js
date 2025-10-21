import { lazy } from 'react';

export const Home = lazy(() => import('./Home'));
export const About = lazy(() => import('./About'));
export const Blog = lazy(() => import('./Blog'));
export const Contact = lazy(() => import('./Contact'));
export const Calendar = lazy(() => import('./CalendarPage'));