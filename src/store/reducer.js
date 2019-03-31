//reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state
import { combineReducers } from 'redux';

let counter=(state=0,action)=>{
    switch(action.type){
        case 'ADD':
            return state + action.value;
        case 'DEC':
            return state - action.value;
        default:
            return state;
    }
}

let initValue = {
    list:[1,2,3]
}
let todo=(state=initValue,action)=>{//纯函数 (state,action) state是新的 action返回
    switch(action.type){
        case 'add_item':
             //reducer里禁止修改传入参数。两种方法：1、运用深拷贝2、Object.assign()
            let newState = JSON.parse(JSON.stringify(state))//方法2
            // let obj = Object.assign({},state) //方法1
            newState.list.push(action.value);
            return newState;
        case 'dec_item':
            let deleteState = JSON.parse(JSON.stringify(state));
            deleteState.list.splice(action.value,1);
            return deleteState;
        default:
            return state;
    }
}
export default combineReducers({
    counter,todo
})
