import React from 'react';
import { Component } from "react";
import Crossword from '@jaredreisinger/react-crossword';

const data = {
    down: {
        1: {
          clue: 'Biggest start in universe',
          answer: 'SOL',
          row: 0,
          col: 4,
        },
        2: {
            clue: 'Basic element for humans',
            answer: 'AR',
            row: 2,
            col: 3,
          },

      },
      across: {
        3: {
          clue: 'Synonym for faithful',
          answer: 'LEAL',
          row: 2,
          col: 1,
        },
        4: {
            clue: 'When people strongly believe on an ideology',
            answer: 'FE',
            row: 3,
            col: 0,
          },
          5: {
            clue: 'Husband of the queen (backwards)',
            answer: 'REI',
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
