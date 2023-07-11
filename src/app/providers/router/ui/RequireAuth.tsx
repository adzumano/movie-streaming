import { RoutePath } from 'app/providers/router';
import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IRequireAuthProps {
    children: JSX.Element;
}
export const RequireAuth: FC<IRequireAuthProps> = ({ children }) => {
    const isAuth = false;
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={RoutePath.login} state={{ from: location }} replace />;
    }

    return children;
};
