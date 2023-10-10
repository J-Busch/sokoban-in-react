import { useState, useContext, useEffect, useReducer } from 'react';

import './GameBoard.css';
import { types, blankBoard } from '../../../data/game-boards';
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
    const [levelComplete, setLevelComplete] = useState(false);
    const [game, dispatchGameAction] = useReducer(
        gameBoardReducer,
        defaultGameState
    );

    let { grid, movers, goals } = game;
    movers = JSON.parse(JSON.stringify(movers));
    goals = JSON.parse(JSON.stringify(goals));
    grid = JSON.parse(JSON.stringify(grid));
    

    useEffect(() => {
        const setup = (grid) => {
            let setup = defaultGameState;
            setup = JSON.parse(JSON.stringify(defaultGameState));
        
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
                    if (grid[i][j] === "MG") {
                        setup.movers.push([i, j]);
                        setup.goals.push([i, j]);
                    }
                    if (grid[i][j] === "PG") {
                        setup.player = [i, j];
                        setup.goals.push([i, j]);
                    }
                }
            }
        
            return setup;
        };

        const initalGrid = props.data[gameCtx.gameStatus - 1];
        let initalSetup = setup(initalGrid);
        //console.log(initalGrid, initalSetup);
        dispatchGameAction({
            type: 'SETUP',
            grid: initalGrid,
            player: initalSetup.player,
            movers: initalSetup.movers,
            goals: initalSetup.goals,
        });

        const handleKeyDown = (event) => {
            event.preventDefault();
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
        if (levelComplete === false) {
            movers.forEach(mover => {
                goals.forEach(goal => {
                    if (mover[0] === goal[0] && mover[1] === goal[1]) {
                        count++;
                    }
                });
            });
        }
        if (count === goals.length && count !== 0) {
            setLevelComplete(true);
            gameCtx.handleStatusUpdate();

            setTimeout(() => {
                setLevelComplete(false);
            }, "1500");
        }
    }, [movers, goals, gameCtx, levelComplete]);

    const renderBoard = (board) => {
        return board.map((row, i) => {
            const newRow = row.map((key, j) => {
                return (
                    <Block classes={types[key]} coords={[i, j]} key={`${i}_${j}`} />
                );
            });
            return <Row key={`row_${i}`}>{newRow}</Row>;
        });
    }

    const blocks = renderBoard(grid);
    const blank = renderBoard(blankBoard);

    return (
        <section className='game_board'>
            { levelComplete && <div className="game_board__level-complete">Level Complete!</div> }
            { !levelComplete  ? blocks : blank }
        </section>
    );
};

export default GameBoard;