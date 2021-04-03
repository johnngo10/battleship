import './App.css';
import React, { useState, useEffect } from 'react';
import EnemyGrid from './components/EnemyGrid';
import FriendlyGrid from './components/FriendlyGrid';
import Header from './components/Header';

const App = () => {
  const [enemyShips, setEnemyShips] = useState([]);
  const [friendlyShips, setFriendlyShips] = useState([]);
  const [selected, setSelected] = useState('');
  const [direction, setDirection] = useState('Horizontal');
  const [disableOption, setDisableOption] = useState([]);
  const [startGame, setStartGame] = useState(false);
  const horEdge = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
  const horEdge2 = [
    9,
    19,
    29,
    39,
    49,
    59,
    69,
    79,
    89,
    99,
    8,
    18,
    28,
    38,
    48,
    58,
    68,
    78,
    88,
    98,
  ];
  const horEdge3 = [
    9,
    19,
    29,
    39,
    49,
    59,
    69,
    79,
    89,
    99,
    8,
    18,
    28,
    38,
    48,
    58,
    68,
    78,
    88,
    98,
    7,
    17,
    27,
    37,
    47,
    57,
    67,
    77,
    87,
    97,
  ];
  const horEdge4 = [
    9,
    19,
    29,
    39,
    49,
    59,
    69,
    79,
    89,
    99,
    8,
    18,
    28,
    38,
    48,
    58,
    68,
    78,
    88,
    98,
    7,
    17,
    27,
    37,
    47,
    57,
    67,
    77,
    87,
    97,
    6,
    16,
    26,
    36,
    46,
    56,
    66,
    76,
    86,
    96,
  ];
  const vertEdge = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
  const vertEdge2 = [
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
  ];
  const vertEdge3 = [
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
  ];
  const vertEdge4 = [
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
  ];

  const Ship = (length, num) => {
    // example object {length: [0,1], hit: 1, sunk: true}
    const hit = num => {};
    const isSunk = () => {};
    return { length, hit, isSunk };
  };

  const enemyFire = e => {
    console.log(e.target);
  };

  const generateEnemyShips = () => {
    // Generate random number
    // const randNum = max => {
    //   return Math.floor(Math.random() * Math.floor(max));
    // };
    // something wrong with edgeArr
    const randNum = (max, edgeArr) => {
      const num = Math.floor(Math.random() * Math.floor(max));
      console.log(edgeArr);
      return horEdge.indexOf(num) > 0
        ? Math.floor(Math.random() * Math.floor(max))
        : num;
    };
    // Generate random direction
    const randomDir = () => {
      const direction = ['horizontal', 'vertical'];
      return direction[randNum(2)];
    };
    // Generate ship
    const ship = shipNum => {
      const direction = randomDir();
      if (direction === 'horizontal') {
        let ships = [];
        if (shipNum === 0) {
          ships.push(randNum(90, horEdge));
        } else if (shipNum === 1) {
          ships.push(randNum(90, horEdge2));
        } else if (shipNum === 2) {
          ships.push(randNum(90, horEdge3));
        } else if (shipNum === 3) {
          ships.push(randNum(90, horEdge4));
        }
        // ships.push(randNum(90));
        for (let i = 0; i <= shipNum; i++) {
          ships.push(ships[ships.length - 1] + 1);
        }
        return ships;
      } else if (direction === 'vertical') {
        let ships = [];
        if (shipNum === 0) {
          ships.push(randNum(90, vertEdge));
        } else if (shipNum === 1) {
          ships.push(randNum(90, vertEdge2));
        } else if (shipNum === 2) {
          ships.push(randNum(90, vertEdge3));
        } else if (shipNum === 3) {
          ships.push(randNum(90, vertEdge4));
        }
        for (let i = 0; i <= shipNum; i++) {
          ships.push(ships[ships.length - 1] + 10);
        }
        return ships;
      }
    };
    // Create ship arr
    const shipsArr = () => {
      let arr = [];
      arr = ship(0);
      const ship2 = arr.concat(ship(1));
      arr = ship2;
      const ship3 = arr.concat(ship(1));
      arr = ship3;
      const ship4 = arr.concat(ship(2));
      arr = ship4;
      const ship5 = arr.concat(ship(3));
      arr = ship5;

      return arr;
    };

    setEnemyShips(shipsArr());
  };

  const handleSelect = e => {
    const target = e.target.getAttribute('data-num');
    setSelected(target);
  };

  const resetSelect = () => {
    setSelected('');
  };

  const handleDirection = e => {
    const target = e.target.textContent;
    if (direction === 'Horizontal') {
      setDirection('Vertical');
    } else if (direction === 'Vertical') {
      setDirection('Horizontal');
    }
  };

  const removeShipOption = num => {
    let arr = disableOption.concat(num);
    // setDisableOption(...disableOption, num);
    setDisableOption(arr);
    console.log(disableOption);
    console.log();
  };

  const start = () => {
    setStartGame(true);
    generateEnemyShips();
  };

  const Gameboard = () => {};

  // Enemy ships cant overlap or go over edge

  return (
    <div className='App'>
      <Header />
      <div className='gameboard'>
        <div className='controller-container'>
          {startGame === true ? (
            <React.Fragment>
              <h3>Stats</h3>
              <div>
                <p>0 successful hits</p>
              </div>
            </React.Fragment>
          ) : disableOption.length > 4 ? (
            <button onClick={start}>Start Game</button>
          ) : (
            <React.Fragment>
              {' '}
              <div>
                <h3>Ships</h3>
                <div
                  className={`select-ships ${
                    disableOption.indexOf('4') > -1 ? 'disable' : 'undefined'
                  }`}
                  data-num='4'
                  onClick={handleSelect}
                >
                  Carrier
                </div>
                <div
                  className={`select-ships ${
                    disableOption.indexOf('3') > -1 ? 'disable' : 'undefined'
                  }`}
                  data-num='3'
                  onClick={handleSelect}
                >
                  Battleship
                </div>
                <div
                  className={`select-ships ${
                    disableOption.indexOf('2') > -1 ? 'disable' : 'undefined'
                  }`}
                  data-num='2'
                  onClick={handleSelect}
                >
                  Cruiser
                </div>
                <div
                  className={`select-ships ${
                    disableOption.indexOf('1') > -1 ? 'disable' : 'undefined'
                  }`}
                  data-num='1'
                  onClick={handleSelect}
                >
                  Submarine
                </div>
                <div
                  className={`select-ships ${
                    disableOption.indexOf('0') > -1 ? 'disable' : 'undefined'
                  }`}
                  data-num='0'
                  onClick={handleSelect}
                >
                  Destroyer
                </div>
              </div>
              <button onClick={handleDirection}>{direction}</button>
              <p>Restart</p>{' '}
            </React.Fragment>
          )}
        </div>
        <FriendlyGrid
          selected={selected}
          direction={direction}
          removeShipOption={removeShipOption}
          resetSelect={resetSelect}
        />
        <EnemyGrid enemyFire={enemyFire} enemyShips={enemyShips} />
      </div>
    </div>
  );
};

export default App;
