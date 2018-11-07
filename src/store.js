import { createStore, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';


export const history = createHistory();

const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
    /* eslint-disable no-underscore-dangle */
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    /* eslint-enable */
    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    ...enhancers,
);

export default createStore(
    initialState,
    composedEnhancers,
);
