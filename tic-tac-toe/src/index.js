import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     // constructor(props){
//     //     {/* In JS classes, you need to ALWAYS call -super- when defining the constructor of a subclass */}
//     //     {/* All React component classes that have a constructor should start it with a  */}
//     //     {/* super(props) call */}
//     //     super(props);
        
//     //     this.state = { // <---------------------------------------------------------------------------------------|
//     //         value: null,   //                                                                                     |
//     //     };//                                                                                                      |
//     // } //                                                                                                          |
//     render() { {/*                                                                                                | */}
//       {/* Making an interactive component                                                                         | */}
//       {/* When we click on one of the squares in the grid we will replace it with an "x"                          | */}
//       {/*                                                                                                         | */}
//       {/* We want the Square component to 'REMEMBER' that it got clicked, and fill it with an 'X' mark            | */}
//       {/* To "REMEMBER" things, components use STATE                                                              | */}
//       {/* React components can have state by setting "this.state" in their constructors                           | */}
//       {/* this.state SHOULD be considered as private to a React component that it's defined in                    | */}
//       {/* Let's store the current valye of the Square in "this.state",and change it when the Square is clicked ---| */}
//       return (
//         <button className="square" onClick={() => this.props.onClick()}> {/* we're passing a function as the onClick prop bc Square no longer has a state we can update USING setState */}
//         {/* By calling this.setState from an onClick handler in the Square's RENDER method, we tell React to
//             re-render that Square whenever its <button> is clicked.  */}
        
//         {this.props.value}    
//         {/* Square no longer has a STATE, therefore we can NO LONGER DO this.state.value
//             we must access the information being handed down from the PARENT component Board
//             WHICH we can do through PROPS -- hence this.props.value
//         */}
        
//         {/* After the update, the Square's 'this.state.value' will be 'X', so we'll see X on the game board. If you click on ANY square, an 'x' should show up */}
//         {/* When you call setState in a component, React automatically updates the CHILD components inside of it too. */}

//         {/* onClick={alert('click)} is a MISTAKE bc it would fire the alert every time the component RE-RENDERS */}
//         {/* STATE acts as our memory, so we look there to access anything */}
//         </button>
//       );
//     }
//   }

// FUNCTIONAL COMPONENTS are a simpler way to write components that only contain a RENDER METHOD and don't have their own state.
// Instead of defining a class which extends React.Component, we can write a function that takes PROPS as input and returns what should
// be rendered. Functional components are less tedious to write than classes, and many components can be expressed this way.
function Square(props){
    return(
        <button className='square' onClick={props.onClick}> {/* In FUNCTION COMPONENTS we don't have to worry about THIS */}
            {props.value}     {/* Which is why, it's not this.props.value or this.props.onClick() THIS IS ONLY TRUE FOR -- FUNCTIONAL COMPONENTS */}
        </button>
    );
}

function calculateWinner(squares) {
  // the array lines consists of ALL the winning possibilities
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
  // the for-loop reads EACH winning line, and we proceed into the IF statement
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // Here we will READ the elements INSIDE the squares of lines[i] AND THEN COMPARE to see if the elements are the same!
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // IF the elements ARE the SAME return the ELEMENT/SYMBOL inside square[a]
      return squares[a];
    }
  }
  // IF the elements ARE NOT the SAME we return NULL
  return null;
}


  {/* CURRENTLY EACH Square component maintains the game's state.                                                                         */}
  {/* To check for a winner, we'll maintain the value of each of the 9 squares in one location                                            */}
  {/* The best approach is to store the game's state in the parent Board component INSTEAD of in each Square                              */}
  {/* The BOARD component can tell each Square what to display BY DISPLAY A PROP just like we did when we passed a number to each Square. */}
  
  {/* To collect data from MULTIPLE CHILDREN, or to have 2 child components communicate with each other                                    */}
  {/* YOU need to DECLARE the SHARED STATE in their PARENT COMPONENT instead                                                               */}
  {/* The parent component can pass the state back down to the children by using props                                                     */}
  {/* This keeps the child components in sync with each other and with the parent component                                                */}
  
  {/* We'll add a constructor to the Board and set the Board's initial state to contain an array with 9 nulls
      These 9 nulls correspond to the 9 squares */}  
  class Board extends React.Component {  
    renderSquare(i) {                   // this is a method called "renderSquare"
                                        // Passing Data through props (section title)
    //   return <Square value={i} />;      // here we're going to pass a prop called "value" to the Square component -- the name of the prop 'value' is arbitrary
                                        // AFTER passing the prop we go to the SQUARE COMPONENT to ACCESS the PROP
    
      // return <Square value={i} />; HERE we're passing down the value prop DOWN from the board to show numbers from 0 to 8 in every square
      // Then we replaced the numbers with an 'X' mark determined by Square's OWN state.
      // Since square has its own state, Square ignores the value prop passed to it by the Board.
      // SO we need to modify the Board's state
      
      // We will use the PROP passing mechanism 
      // We can modify the Board to instruct each individual Square about it's current value ('X', 'O', or 'null')
      // We have already defined the squares array in the Board's constructor, and we will modify the Board's renderSquare method to read from it:
        return <Square 
              value = {this.props.squares[i]} 
              onClick = {() => this.props.onClick(i)}/>; {/* this is a HANDLER FUNCTION --> we need to define before we CALL IT or it THROWS an error */}
    {/* Now we're passing down TWO props from BOARD to SQUARE: value and onClick */}
    {/* The onClick prop is a function that Square can call when clicked */}
    {/*
       * Replace this.state.value with this.props.value in Square's render method
       * Replace this.setState() with this.prop.onClick() in Square's render method
       * Delete the constructor from SQUARE bc SQUARE no longer keeps track of the game's state
    */}
    }
  
    render() {
      return (
        <div>
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
  
  class Game extends React.Component {
    constructor(props){
      super(props);
      this.state = {
          history: [{
            squares: Array(9).fill(null)
          }],
          // Each time a player moves, xIsNext(a boolean) will be flipped to determine which player goes next AND we save the game's state
          // therefore we need an EVENT HANDLER (handleClick) to allow the switches, and we do this:    -- to go back and forth between X and O
          stepNumber: 0,
          xIsNext: true, 
      };
    }

    handleClick(i){
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length-1];
      const squares = current.squares.slice();   // We call slice() to CREATE a copy of the SQUARES ARRAY to modify INSTEAD of modifying the EXISTING array.
      // here We needed to make sure that a CLICK is IGNORED if a WINNER was calculated OR if the Square is FILLED already
      if (calculateWinner(squares) || squares[i]){
        return; // return early if theres a winner OR square is filled 
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';  // if xIsNext is true display X, else display O
      this.setState({
        history: history.concat([{
          squares:squares
        }]),
        xIsNext : !this.state.xIsNext,
        stepNumber : history.length, 
      });
    }

    jumpTo(step){
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }

    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);
      
      const moves = history.map((step,move) => {
        const desc = move ?
          'Go to move #' + move:
          'Go to game start';
        return (
          <li key={move}> 
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
      return (
        <div className="game">
          <div className="game-board">
            <Board 
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
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
  