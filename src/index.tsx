import App from 'app/App';
import 'app/styles/index.scss';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import 'shared/config/i18n/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
