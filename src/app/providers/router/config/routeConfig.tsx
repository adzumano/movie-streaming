import { PrivateLayout, PublicLayout } from 'app/layouts';
import { LoginPage } from 'pages/LoginPage';
import { MainPage } from 'pages/MainPage';
import { ReactNode } from 'react';
import { type RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    isAuth?: boolean;
    layout?: ReactNode;
};

export enum AppRoutes {
    MAIN = 'main',
    LOGIN = 'login',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]: '/login',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        isAuth: true,
        layout: <PrivateLayout />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
        layout: <PublicLayout />,
    },
};
