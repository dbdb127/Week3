import CalendarTab from './pages/CalendarTab';
import Analytics from './pages/Analytics';
import Home from './pages/Home';

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/calendar',
    component: CalendarTab,
  },
  {
    path: '/analytics',
    component: Analytics,
  },
];
