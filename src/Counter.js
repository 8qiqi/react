import React, { Component } from 'react';
import store from './store';

class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter
        }
        store.subscribe(()=>{
            this.setState({
                num:store.getState().counter
            })
        })
    }
    handleAdd=()=>{
        let action={type:'ADD',value:10};
        store.dispatch(action);
    }
    handleDec=()=>{
        let action={type:'DEC',value:1};
        store.dispatch(action);
    }
    handleAddOdd=()=>{
        if(this.state.num%2!==0){
            let action={type:'ADD',value:1};
            store.dispatch(action);
        }
    }
    handleAddAsync(){
        setTimeout(()=>{
            let action={type:'ADD',value:1};
            store.dispatch(action);
        },1000)
    }
    render() {
        return (
            <div>
                <p>
                    Clicked: <span>{this.state.num}</span> times<br/>
                    <button onClick={()=>{this.handleAdd()}}>+</button><br/>
                    <button onClick={()=>{this.handleDec()}}>-</button><br/>
                    <button onClick={()=>{this.handleAddOdd()}}>Increment if odd</button><br/>
                    <button onClick={()=>{this.handleAddAsync()}}>Increment async</button>
                </p>
            </div>
        );
    }
}

export default Counter;
