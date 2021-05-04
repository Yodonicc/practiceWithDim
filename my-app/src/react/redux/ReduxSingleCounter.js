import React from 'react';
import { createStore } from 'redux';



const counter = (state = 0, action) => {
    switch(action.type){
    case 'INCREMENT':
        return state + 1;
    case 'DECREMENT':
        return state - 1;
    default:
        return state;
    }
}

// const { createStore } = Redux;


class ReduxSingleCounter extends React.Component{
    render(){
        const store = createStore(counter)

        const render = () => {
            document.body.innerText = store.getState()
        }

        store.subscribe(render)
        render()

        document.addEventListener('click', () => {
            store.dispatch({ type: 'INCREMENT' })
        })
        return null
        // return <div>我是 ReduxSingleCounter</div>
    }
}

export default ReduxSingleCounter

//手写实现createStore

const mycreateStore = (reducer) => {
    let state
    let listeners = []

    const getState = () => state

    const dispatch = (action) => {
        state = reducer(state, action)
        //对于listeners里面的每一个回调函数都执行一遍
        listeners.forEach(listener => listener())
    }

    const subscribe = (listener) => {
        listeners.push(listener)
        //注意此时这个清除listener的return语句，没有执行，只是作为未来可以执行的函数返回。目的是未来你想要unsubscribe的时候，只用调用执行一下subscribe函数的返回值就行了。
        return () => {
            listeners = listeners.filter(l => l !== listener)
        }
    }

    //初始化store
    dispatch({})

    return { getState, dispatch, subscribe }
}