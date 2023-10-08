import React from 'react';
import { useState } from 'react';

const GameContext = React.createContext({
    gameStatus: 0,
    handleStatusUpdate: () => {},
});

export const GameProvider = (props) => {
    const [gameStatus, setGameStatus] = useState(0);

    const handleStatusUpdate = () => {
        setGameStatus((prevState) => {
            const newStatus = prevState + 1;
            return newStatus;
        });
    }

    const gameContext = {
        gameStatus: gameStatus,
        handleStatusUpdate: handleStatusUpdate 
    };

    return (
        <GameContext.Provider value={gameContext}>
            {props.children}
        </GameContext.Provider>
    );
};

export default GameContext;