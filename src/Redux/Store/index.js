import {createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import Reducers from '../Reducers';

function RootStore(initialState) {
    return createStore(
        Reducers,
        initialState,
        compose(
            composeWithDevTools(applyMiddleware(thunkMiddleware)),
        ),
    );
}
const Store=RootStore();


export default Store;