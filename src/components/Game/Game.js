import classes from './Game.css';
import GameBoard from './GameBoard/GameBoard';

import GameHeader from './GameHeader/GameHeader';

const Game = (props) => {
    return (
        <main className={classes.game}>
            <GameHeader />
            <GameBoard />
        </main>
    );
};

export default Game;