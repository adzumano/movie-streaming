import { AppRouter } from 'app/providers/router';

import '../shared/config/i18n/i18n';
import { withProviders } from './providers';
import './styles/index.scss';

const App = () => {
    return <AppRouter />;
};

export default withProviders(App);
