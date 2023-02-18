import React from 'react';
import { Component } from "react";
import Crossword from '@jaredreisinger/react-crossword';

const data = {
    down: {
        1: {
          clue: 'answer for 1',
          answer: 'answer1',
          row: 0,
          col: 4,
        },
        2: {
            clue: 'answer for 2',
            answer: 'answer2',
            row: 2,
            col: 3,
          },

      },
      across: {
        3: {
          clue: 'answer for 3',
          answer: 'answer3',
          row: 2,
          col: 1,
        },
        4: {
            clue: 'answer for 4',
            answer: 'answer4',
            row: 3,
            col: 0,
          },
          5: {
            clue: 'answer for 5',
            answer: 'answer5',
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
