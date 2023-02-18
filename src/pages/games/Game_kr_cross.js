import React from 'react';
import { Component } from "react";
import Crossword from '@jaredreisinger/react-crossword';

const data = {
    down: {
        1: {
          clue: 'The person who is pregnant',
          answer: '임산부',
          row: 0,
          col: 4,
        },
        2: {
            clue: 'Money paid at regular intervals to repay debts',
            answer: '부금',
            row: 2,
            col: 3,
          },

      },
      across: {
        3: {
          clue: 'Lovebirds',
          answer: '잉꼬부부',
          row: 2,
          col: 1,
        },
        4: {
            clue: 'Whiter than Red, Redder than white',
            answer: '핑크',
            row: 3,
            col: 0,
          },
          5: {
            clue: 'Getting sicker',
            answer: '병세',
            row: 4,
            col: 1,
          },
        },
      };
const theme = {
    gridBackground: "rgb(255, 0, 0)"
};
    
class App extends Component {
    render() {
         return (
         <div className="App">
            <header className="App-header">
              <Crossword data={data} />
             </header>{" "}
           </div>
      );
    }
  }

export default App;
