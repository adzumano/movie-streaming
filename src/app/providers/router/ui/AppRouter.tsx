import { PrivateLayout } from 'app/layouts';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Navigate, useRoutes } from 'react-router-dom';

export const AppRouter = () => {
    return useRoutes([
        {
            element: <PrivateLayout />,
            children: [{ path: '/', element: <MainPage /> }],
        },
        { path: '404', element: <NotFoundPage /> },
        { path: '*', element: <Navigate to={'/404'} replace /> },
    ]);
};
