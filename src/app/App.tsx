import { AppRouter } from 'app/providers/router';

import '../shared/config/i18n/i18n';
import { withProviders } from './providers';
import './styles/index.scss';

const App = () => {
    return (
        <main className={'app'}>
            <AppRouter />
        </main>
    );
};

export default withProviders(App);
