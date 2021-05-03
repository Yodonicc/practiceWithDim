import React from 'react';
import styles from './ReactTicTacToe.module.less'
import './ReactTicTacToe.css'

class ReactTicTacToe extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        }
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()
        if(calculateWinner(squares) || squares[i]){
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        //假如这个地方不加this，会出现什么情况？
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        })

        //假如不通过setState，直接这样通过this.state.xxx = 来修改state，有什么弊端吗？
        // this.state.xIsNext = !this.state.xIsNext
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }

    render(){
        const history = this.state.history
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares)

        const moves = history.map((step, move) => {
            const desc = move ?
                'Go to move #' + move :
                'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status
        if(winner){
            status = 'Winner: ' + winner
        }else{
            status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O')
        }
        return(
            <div className="game">
                <div className="game-board">
                    <Board 
                        squares = {current.squares}
                        onClick = {(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{ status }</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// class Square extends React.Component {
//     render() {
//         return (
//             <button 
//                 className="square" 
//                 //如果这里直接改成onClick={this.props.onClick}会出现什么
//                 //对比下方函数组件就知道区别了
//                 onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

function Square(props){
    return (
        <button 
            className="square" 
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}
  
class Board extends React.Component {

    renderSquare(i) {
        return <Square 
            value={this.props.squares[i]}
            //假如这个地方不加this，会出现什么情况？
            //假如这个箭头函数参数有一个i，会出现什么情况？
            onClick={() => this.props.onClick(i)}
        />;
    }
  
    render() {
        return (
            <div>
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

//判断获胜的逻辑部分，就是算法，和React没关系
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
  
 
export default ReactTicTacToe;