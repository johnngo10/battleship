import { useState, useEffect } from 'react';

const FriendlyGrid = props => {
  const [cells, setCells] = useState([]);
  const [friendlyShips, setFriendlyShips] = useState([]);
  const { selected } = props;

  useEffect(() => {
    let arr = [];
    let width = 10;
    for (let i = 0; i < width * width; i++) {
      setCells(arr);
      arr.push([i]);
    }
  }, []);

  const generateShip = (position, shipNum) => {
    let ships = [];
    ships.push(parseInt(position));
    for (let i = 0; i <= shipNum; i++) {
      ships.push(ships[ships.length - 1] + 1);
    }
    return ships;
  };

  // destroyer is acting weird
  const handlePlacedShip = e => {
    const position = e.target.getAttribute('position');
    let arr = [];
    if (
      selected === '0' &&
      friendlyShips.indexOf(parseInt(position)) < 0 &&
      friendlyShips.indexOf(parseInt(position) + 1) < 0
    ) {
      arr = generateShip(position, 0);
    } else if (selected === '1' || selected === '2') {
      if (
        friendlyShips.indexOf(parseInt(position)) < 0 &&
        friendlyShips.indexOf(parseInt(position) + 2) < 0
      ) {
        arr = generateShip(position, 1);
      }
    } else if (
      selected === '3' &&
      friendlyShips.indexOf(parseInt(position)) < 0 &&
      friendlyShips.indexOf(parseInt(position) + 3) < 0
    ) {
      arr = generateShip(position, 2);
    } else if (
      selected === '4' &&
      friendlyShips.indexOf(parseInt(position)) < 0 &&
      friendlyShips.indexOf(parseInt(position) + 4) < 0
    ) {
      arr = generateShip(position, 3);
    }
    console.log(position);
    console.log(friendlyShips);
    setFriendlyShips(arr.concat(friendlyShips));
  };

  const setShip = num => {
    for (let i = 0; i < friendlyShips.length; i++) {
      if (friendlyShips[i] === num) {
        return 'ship';
      }
    }
  };

  return (
    <div className='friendly-grid-container'>
      <h2>You</h2>
      <div className='friendly-grid'>
        {cells.map((value, index) => {
          return (
            <div
              className={`friendly-cell ${setShip(value[0])}`}
              key={index}
              onClick={handlePlacedShip}
              position={value[0]}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FriendlyGrid;
