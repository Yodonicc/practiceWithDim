import React from 'react';
import styles from './ReactTicTacToe.module.less'
import './ReactTicTacToe.css'

class ReactTicTacToe extends React.Component{
    render(){
        return(
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

class Square extends React.Component {
    render() {
        return (
            <button 
                className="square" 
                //如果这里直接改成onClick={this.props.onClick}会出现什么
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}
  
class Board extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            squares: Array(9).fill(null)
        }
    }

    handleClick(i){
        const squares = this.state.squares.slice()
        squares[i] = 'X'
        //假如这个地方不加this，会出现什么情况？
        this.setState({squares: squares})
    }

    renderSquare(i) {
        return <Square 
            value={this.state.squares[i]}
            //假如这个地方不加this，会出现什么情况？
            //假如这个箭头函数参数有一个i，会出现什么情况？
            onClick={() => this.handleClick(i)}
        />;
    }
  
    render() {
        const status = 'Next player: X';
  
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}
  
 
export default ReactTicTacToe;