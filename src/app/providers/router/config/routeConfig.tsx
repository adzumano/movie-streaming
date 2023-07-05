import { LoginPage } from 'pages/LoginPage';
import { MainPage } from 'pages/MainPage';
import { type RouteProps } from 'react-router-dom';

enum AppRoutes {
    MAIN = 'main',
    LOGIN = 'login',
}
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]: '/login',
};
export const routeConfig: RouteProps[] = [
    {
        path: RoutePath.main,
        element: <MainPage />,
    },
    {
        path: RoutePath.login,
        element: <LoginPage />,
    },
];
