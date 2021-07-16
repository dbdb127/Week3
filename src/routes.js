import CalendarTab from './pages/CalendarTab';
import Analytics from './pages/Analytics';
import Home from './pages/Home';
import Payment from './pages/Payment';

export const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/calendar',
        component: CalendarTab
    },
    {
        path: '/analytics',
        component: Analytics
    },
    {
        path: '/payment',
        component: Payment
    }
];