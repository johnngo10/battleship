import './App.css';
import { useState, useEffect } from 'react';
import EnemyGrid from './components/EnemyGrid';
import FriendlyGrid from './components/FriendlyGrid';
import Header from './components/Header';

const App = () => {
  const [enemyShips, setEnemyShips] = useState([]);
  const [friendlyShips, setFriendlyShips] = useState([]);
  const [selected, setSelected] = useState('');

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
    const randNum = max => {
      return Math.floor(Math.random() * Math.floor(max));
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
        ships.push(randNum(90));
        for (let i = 0; i <= shipNum; i++) {
          ships.push(ships[ships.length - 1] + 1);
        }
        return ships;
      } else if (direction === 'vertical') {
        let ships = [];
        ships.push(randNum(90));
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

  const handleClick = () => {
    generateEnemyShips();
  };

  const handleSelect = e => {
    const target = e.target.getAttribute('data-num');
    setSelected(target);
  };

  const Gameboard = () => {};

  // I need to figure this out

  return (
    <div className='App'>
      <Header />
      <div className='gameboard'>
        <div className='controller-container'>
          <h3>Ships</h3>
          <div>
            <div className='select-ships' data-num='0' onClick={handleSelect}>
              Carrier
            </div>
            <div className='select-ships' data-num='1' onClick={handleSelect}>
              Battleship
            </div>
            <div className='select-ships' data-num='2' onClick={handleSelect}>
              Cruiser
            </div>
            <div className='select-ships' data-num='3' onClick={handleSelect}>
              Submarine
            </div>
            <div className='select-ships' data-num='4' onClick={handleSelect}>
              Destroyer
            </div>
          </div>
          <p>Restart</p>
        </div>
        <FriendlyGrid selected={selected} />
        <EnemyGrid enemyFire={enemyFire} enemyShips={enemyShips} />
      </div>
      <div>
        <button onClick={handleClick}>Start</button>
      </div>
    </div>
  );
};

export default App;
