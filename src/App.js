import './App.css';
import EnemyGrid from './components/EnemyGrid';
import FriendlyGrid from './components/FriendlyGrid';
import Header from './components/Header';

const App = () => {
  const Ship = (length, hit, sunk) => {
    // example object {length: [0,1], hit: A1, sunk: true}
    const hit = num => {};
    const isSunk = () => {};
    return { length, hit, sunk };
  };

  const Gameboard = () => {};

  return (
    <div className='App'>
      <Header />
      <div>
        <FriendlyGrid />
        <EnemyGrid />
      </div>
    </div>
  );
};

export default App;
