import { useState, useEffect } from 'react';

const FriendlyGrid = () => {
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
      <div className='friendly-grid-container'>
        {cells.map((value, index) => {
          return <div className='friendly-cell' key={index}></div>;
        })}
      </div>
    </div>
  );
};

export default FriendlyGrid;
