import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component { // this a COMPONENT called SQUARE
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component { // this a COMPONENT called BOARD
    renderSquare(i) {                   // this is a method called "renderSquare"
                                        // Passing Data through props
      return <Square value={i} />;      // here we're going to pass a prop called "value" to the Square component
                                        // AFTER passing the prop we go to the SQUARE COMPONENT and to ACCESS the PROP
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
          {/* What's happening here is that we're making 9 calls to the function renderSquare */}
          {/* Each time we make a call to the function --> we pass the value inside the parenthesis */}
          {/* Hence when we call the function and pass i, each integer from 0-8 is inserted in the Square board */}
            {this.renderSquare(0)} {/* Here we're passing the value 0 */}
            {this.renderSquare(1)} {/* Here we're passing the value 1 */} 
            {this.renderSquare(2)} {/* Here we're passing the value 2 */}
          </div>
          <div className="board-row">
            {this.renderSquare(3)} {/* Here we're passing the value 3 */}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)} {/* Here we're passing the value 6 */}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component { // this is a COMPONENT called GAME
    render() {
      return (
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
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  