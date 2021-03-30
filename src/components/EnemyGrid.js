import { useState, useEffect } from 'react';

const EnemyGrid = () => {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    let arr = [];
    let width = 10;
    for (let i = 0; i < width * width; i++) {
      setCells(arr);
      arr.push([i]);
    }
  }, []);

  return (
    <div>
      <div className='enemy-grid-container'>
        {cells.map((value, index) => {
          return <div className='enemy-cell' key={index}></div>;
        })}
      </div>
    </div>
  );
};

export default EnemyGrid;
