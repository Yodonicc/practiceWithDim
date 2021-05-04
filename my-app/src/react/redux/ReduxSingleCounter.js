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