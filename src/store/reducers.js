// reducers.js

// combineReducers 工具函数，用于组织多个reducer，并返回reducer集合
import {combineReducers} from 'redux'
import defaultState from './state'
//一个reducer 就是一个函数
function testChange ( state = defaultState.test, action){
    // console.log(action.type)
    // 不同的action 有不同的处理逻辑
   switch (action.type) {
    case 'SET_TEST':
        return action.data
    default:
        return state
}
}
export default combineReducers({
    testChange
})
