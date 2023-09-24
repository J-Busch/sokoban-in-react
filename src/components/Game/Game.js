import './Game.css';

import GameBoard from './GameBoard/GameBoard';
import GameHeader from './GameHeader/GameHeader';
import Card from '../UI/Card';

const Game = (props) => {
    return (
        <main className="game">
            <Card classes="game__card">
                <GameHeader />
                <GameBoard />
            </Card>
        </main>
    );
};

export default Game;