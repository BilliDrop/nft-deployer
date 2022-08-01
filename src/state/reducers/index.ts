import {combineReducers} from 'redux';

import activeAccount from './activeAccount';
import darkMode from './darkMode'
import showLeftMenu from './showLeftMenu';

const rootReducer = combineReducers({
    showLeftMenu,
    activeAccount,
    darkMode,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;