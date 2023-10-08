import { useContext, useEffect, useReducer } from 'react';

import './GameBoard.css';
import { types } from '../../../data/game-boards';
import gameBoardReducer from './gameBoardReducer';

import Block from './Block';
import Row from './Row';
import GameContext from '../../../store/game-context';

const defaultGameState = {
    grid: [],
    player: [],
    movers: [],
    goals: [],
}

const GameBoard = (props) => {
    const gameCtx = useContext(GameContext);
    const [game, dispatchGameAction] = useReducer(
        gameBoardReducer,
        defaultGameState
    );

    useEffect(() => {
        const setup = (grid) => {
            const setup = defaultGameState;
        
            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[i].length; j++) {
                    if (grid[i][j] === "P") {
                        setup.player = [i, j];
                    }
                    if (grid[i][j] === "M") {
                        setup.movers.push([i, j]);
                    }
                    if (grid[i][j] === "G") {
                        setup.goals.push([i, j]);
                    }
                }
            }
        
            return setup;
        };

        const initalGrid = JSON.parse(JSON.stringify(props.data[gameCtx.gameStatus - 1]));
        const initalSetup = setup(initalGrid);
        dispatchGameAction({
            type: 'SETUP',
            grid: initalGrid,
            player: initalSetup.player,
            movers: initalSetup.movers,
            goals: initalSetup.goals,
        });

        const handleKeyDown = (event) => {
            if (event.key === 'r') {
                dispatchGameAction({
                    type: 'SETUP',
                    grid: initalGrid,
                    player: initalSetup.player,
                    movers: initalSetup.movers,
                    goals: initalSetup.goals,
                });
            }
            else {
                dispatchGameAction({type: 'KEYDOWN', event: event});
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        return(() => {
            document.removeEventListener("keydown", handleKeyDown);
        });

    }, [gameCtx.gameStatus, props.data]);

    useEffect(() => {
        let count = 0;
        game.movers.forEach(mover => {
            game.goals.forEach(goal => {
                if (mover[0] === goal[0] && mover[1] === goal[1]) {
                    count++;
                }
            });
        });
        if (count === game.goals.length) {
            console.log('LEVEL COMPLETE');
        }
    }, [game]);

    const blocks = game.grid.map((row, i) => {
        const newRow = row.map((key, j) => {
            return (
                <Block classes={types[key]} coords={[i, j]} key={`${i}_${j}`} />
            );
        });
        return <Row key={`row_${i}`}>{newRow}</Row>;
    });

    return (
        <section className='game_board'>
            {blocks}
        </section>
    );
};

export default GameBoard;