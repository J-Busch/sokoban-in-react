import './App.css';

import Header from './components/Layout/Header';
import Game from './components/Game/Game';
import { GameProvider } from './store/game-context';

function App() {
  return (
    <GameProvider>
      <Header />
      <Game />
    </GameProvider>
  );
}

export default App;
