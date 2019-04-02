import { combineReducers } from 'redux'


/*******开始引入页面子Reducers******/

import HomeReducer from '../../Views/Home/redux/HomeReducer';
import MyReducer from '../../Views/My/redux/MyReducer';


/*******结束引入页面子Reducers******/
const Reducers=combineReducers({
    Home:HomeReducer,
    My:MyReducer
});
export default Reducers;