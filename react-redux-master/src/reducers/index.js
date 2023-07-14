 import { combineReducers } from 'redux'


 const counter=(state=0, action)=>{

    if(action.type === 'INCREMENT'){
        return state+action.inc
    }
    return state
 }

 const myreducers = combineReducers({counter})

 export default myreducers;