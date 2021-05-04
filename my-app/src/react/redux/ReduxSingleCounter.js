import React from 'react';
import { createStore } from 'redux';

//这个示例还没解决的问题：点击UI组件按钮没有dispatch事件
//怀疑是react,redux语法问题，先做下一个示例看能不能解决

const counter = (state = 2, action) => {
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
// const store = createStore(counter)

// store.subscribe(ReduxSingleCounter)

function listener(props){
    
}

function ReduxSingleCounter(props){
    const store = createStore(counter)

    store.subscribe(ReduxSingleCounter)

    return (
        <div>
            <Counter 
                value={store.getState()}
                onIncrement={() => 
                    store.dispatch({
                        type: 'INCREMENT'
                    })
                }
                onDecrement={() => 
                    store.dispatch({
                        type: 'DECREMENT'
                    })
                }
            />

        </div>)
}

//注意这里传入值没有写props,里面也没引用props.xxx，是因为传入时候直接对props用解构赋值了
//dump component，UI组件
const Counter = ({
    value,
    onIncrement,
    onDecrement
}) => {
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
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