import React from 'react'

const MyContext = React.createContext('默认值111')

const obj ={
    a: 1,
    b: 2
}

class ReactContext extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
            <div>
                <h1>ReactContext</h1>
                <MyContext.Provider value='理论上这句话应该能从Provider传进来'>
                    <Child1 />
                </MyContext.Provider>
            </div>
        )
    }
}

function Child1(props){
    return (<div><Child2/></div>)
}  

function Child2(props){
    return (<div><Child3/></div>)
}  

function Child3(props){
    return (<div><Target/></div>)
}

function Target(props){
    return (
        <div>
            <MyContext.Consumer>
                {value => <h3>{value}</h3>}
            </MyContext.Consumer>
        </div>
    )
}

export default ReactContext