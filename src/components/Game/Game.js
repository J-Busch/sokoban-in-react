import { useContext } from 'react';

import './Game.css';
import data from '../../data/game-boards';

import GameBoard from './GameBoard/GameBoard';
import GameHeader from './GameHeader/GameHeader';
import Rules from './Rules';
import Congratulations from './Congratulations';
import Card from '../UI/Card';
import GameContext from '../../store/game-context';

const Game = (props) => {
    const gameCtx = useContext(GameContext);

    let gameboard;

    if (gameCtx.gameStatus === 0) {
        gameboard = <Rules onSubmit={gameCtx.handleStatusUpdate}></Rules>;
    }
    else if (gameCtx.gameStatus <= data.length) {
        gameboard = <>
            <GameHeader totalLevels={data.length} />
            <GameBoard data={data} />
        </>;
    }
    else {
        gameboard = <Congratulations></Congratulations>;
    }

    return (
        <main className="game">
            <Card classes="game__card">
                {gameboard}
            </Card>
        </main>
    );
};

export default Game;