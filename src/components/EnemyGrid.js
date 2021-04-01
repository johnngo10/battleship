import { useState, useEffect } from 'react';

const EnemyGrid = props => {
  const [cells, setCells] = useState([]);
  const { enemyFire, enemyShips } = props;

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

  return (
    <div className='enemy-grid-container'>
      <h2>Enemy</h2>
      <div className='enemy-grid'>
        {cells.map((value, index) => {
          return (
            <div
              className={`enemy-cell ${setShip(value[0])}`}
              onClick={enemyFire}
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
