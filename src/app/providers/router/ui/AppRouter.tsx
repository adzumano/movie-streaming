import { PrivateLayout, PublicLayout } from 'app/layouts';
import { LoginPage } from 'pages/LoginPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Navigate, useRoutes } from 'react-router-dom';

export const AppRouter = () => {
    const isAuth = true;
    return useRoutes([
        {
            element: isAuth ? <PrivateLayout /> : <PublicLayout />,
            children: [
                { path: '/', element: <MainPage /> },
                { path: '/login', element: <LoginPage /> },
            ],
        },
        { path: '404', element: <NotFoundPage /> },
        { path: '*', element: <Navigate to={'/404'} replace /> },
    ]);
};
