import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createReduxStore } from '../../config/store';

interface IStoreProviderProps {
    children: ReactNode;
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const store = createReduxStore(navigate);
    return <Provider store={store}>{children}</Provider>;
};
