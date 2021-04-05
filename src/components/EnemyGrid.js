import { useState, useEffect } from 'react';

const EnemyGrid = props => {
  const [cells, setCells] = useState([]);
  const { playerFire, enemyShips, hit, miss } = props;

  useEffect(() => {
    let arr = [];
    let width = 10;
    for (let i = 0; i < width * width; i++) {
      arr.push([i]);
    }
    setCells(arr);
  }, []);

  const setShip = num => {
    for (let i = 0; i < enemyShips.length; i++) {
      if (enemyShips[i] === num) {
        return 'ship';
      }
    }
  };

  const handleHit = num => {
    for (let i = 0; i < hit.length; i++) {
      if (parseInt(hit[i]) === num) {
        return 'hit';
      }
    }
    // console.log(num);
  };

  const handleMiss = num => {
    for (let i = 0; i < miss.length; i++) {
      if (parseInt(miss[i]) === num) {
        return 'miss';
      }
    }
  };

  return (
    <div className='enemy-grid-container'>
      <h2>Enemy</h2>
      <div className='enemy-grid'>
        {cells.map((value, index) => {
          return (
            <div
              className={`enemy-cell ${setShip(value[0])} ${handleHit(
                value[0]
              )} ${handleMiss(value[0])}`}
              onClick={playerFire}
              key={index}
              position={value[0]}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default EnemyGrid;
