import { combineReducers } from 'redux';

import main from './main';
import timer from './timer';
import timerOptions from './timerOptions';

export default combineReducers({
    main,
    timer,
    timerOptions,
});
