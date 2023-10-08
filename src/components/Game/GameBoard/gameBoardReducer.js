const gameBoardReducer = (state, action) => {

    if (action.type === "SETUP") {
        const newState = {
            grid: JSON.parse(JSON.stringify(action.grid)),
            player: action.player,
            movers: JSON.parse(JSON.stringify(action.movers)),
            goals: JSON.parse(JSON.stringify(action.goals)),
        }
        return newState;
    }

    if (action.type === "KEYDOWN") {
        const { grid, player, movers } = state;

        if (action.event.key === "ArrowDown") {
            if (player[0] + 1 < grid.length && grid[player[0] + 1][player[1]] !== 'W') {
                let newState = {
                    grid: JSON.parse(JSON.stringify(grid)),
                    player: player.slice(),
                    movers: JSON.parse(JSON.stringify(movers)),
                    ...state
                }

                if (grid[player[0] + 1][player[1]] === 'M' || grid[player[0] + 1][player[1]] === 'MG') {
                    if (player[0] + 2 < grid.length && grid[player[0] + 2][player[1]] !== 'W' && grid[player[0] + 2][player[1]] !== 'M' && grid[player[0] + 2][player[1]] !== 'MG') {
                        const moverIndex = movers.findIndex((mover) => { return (mover[0] === player[0] + 1 && mover[1] === player[1]) })
                        newState.player = [player[0] + 1, player[1]];
                        newState.movers[moverIndex] = [player[0] + 2, player[1]];

                        if (grid[player[0] + 2][player[1]] === 'G') {
                            newState.grid[player[0] + 2][player[1]] = "MG";
                        }
                        else {
                            newState.grid[player[0] + 2][player[1]] = "M";
                        }

                        if (grid[player[0] + 1][player[1]] === 'MG') {
                            newState.grid[player[0] + 1][player[1]] = 'PG';
                        }
                        else {
                            newState.grid[player[0] + 1][player[1]] = 'P';
                        }

                        if (grid[player[0]][player[1]] === 'PG') {
                            newState.grid[player[0]][player[1]] = 'G';
                        }
                        else {
                            newState.grid[player[0]][player[1]] = '_';
                        }
                    }
                }
                else {
                    newState.player = [player[0] + 1, player[1]];

                    if (grid[player[0] + 1][player[1]] === 'G') {
                        newState.grid[player[0] + 1][player[1]] = 'PG';
                    }
                    else {
                        newState.grid[player[0] + 1][player[1]] = 'P';
                    }

                    if (grid[player[0]][player[1]] === 'PG') {
                        newState.grid[player[0]][player[1]] = 'G';
                    }
                    else {
                        newState.grid[player[0]][player[1]] = '_';
                    }
                }

                return newState;
            }
        }
        if (action.event.key === "ArrowUp") {
            if (player[0] > 0 && grid[player[0] - 1][player[1]] !== 'W') {
                let newState = {
                    grid: JSON.parse(JSON.stringify(grid)),
                    player: player.slice(),
                    movers: JSON.parse(JSON.stringify(movers)),
                    ...state
                }

                if (grid[player[0] - 1][player[1]] === 'M' || grid[player[0] - 1][player[1]] === 'MG') {
                    if (player[0] - 1 > 0 && grid[player[0] - 2][player[1]] !== 'W' && grid[player[0] - 2][player[1]] !== 'M' && grid[player[0] - 2][player[1]] !== 'MG') {
                        const moverIndex = movers.findIndex((mover) => { return (mover[0] === player[0] - 1 && mover[1] === player[1]) })
                        newState.player = [player[0] - 1, player[1]];
                        newState.movers[moverIndex] = [player[0] - 2, player[1]];

                        if (grid[player[0] - 2][player[1]] === 'G') {
                            newState.grid[player[0] - 2][player[1]] = "MG";
                        }
                        else {
                            newState.grid[player[0] - 2][player[1]] = "M";
                        }

                        if (grid[player[0] - 1][player[1]] === 'MG') {
                            newState.grid[player[0] - 1][player[1]] = 'PG';
                        }
                        else {
                            newState.grid[player[0] - 1][player[1]] = 'P';
                        }

                        if (grid[player[0]][player[1]] === 'PG') {
                            newState.grid[player[0]][player[1]] = 'G';
                        }
                        else {
                            newState.grid[player[0]][player[1]] = '_';
                        }
                    }
                }
                else {
                    newState.player = [player[0] - 1, player[1]];

                    if (grid[player[0] - 1][player[1]] === 'G') {
                        newState.grid[player[0] - 1][player[1]] = 'PG';
                    }
                    else {
                        newState.grid[player[0] - 1][player[1]] = 'P';
                    }

                    if (grid[player[0]][player[1]] === 'PG') {
                        newState.grid[player[0]][player[1]] = 'G';
                    }
                    else {
                        newState.grid[player[0]][player[1]] = '_';
                    }
                }

                return newState;
            }
        }
        if (action.event.key === "ArrowLeft") {
            if (player[1] > 0 && grid[player[0]][player[1] - 1] !== 'W') {
                let newState = {
                    grid: JSON.parse(JSON.stringify(grid)),
                    player: player.slice(),
                    movers: JSON.parse(JSON.stringify(movers)),
                    ...state
                }

                if (grid[player[0]][player[1] - 1] === 'M' || grid[player[0]][player[1] - 1] === 'MG') {
                    if (player[1] - 1 > 0 && grid[player[0]][player[1] - 2] !== 'W' && grid[player[0]][player[1] - 2] !== 'M' && grid[player[0]][player[1] - 2] !== 'MG') {
                        const moverIndex = movers.findIndex((mover) => { return (mover[0] === player[0] && mover[1] === player[1] - 1) })
                        newState.player = [player[0], player[1] - 1];
                        newState.movers[moverIndex] = [player[0], player[1] - 2];

                        if (grid[player[0]][player[1] - 2] === 'G') {
                            newState.grid[player[0]][player[1] - 2] = "MG";
                        }
                        else {
                            newState.grid[player[0]][player[1] - 2] = "M";
                        }

                        if (grid[player[0]][player[1] - 1] === 'MG') {
                            newState.grid[player[0]][player[1] - 1] = 'PG';
                        }
                        else {
                            newState.grid[player[0]][player[1] - 1] = 'P';
                        }

                        if (grid[player[0]][player[1]] === 'PG') {
                            newState.grid[player[0]][player[1]] = 'G';
                        }
                        else {
                            newState.grid[player[0]][player[1]] = '_';
                        }
                    }
                }
                else {
                    newState.player = [player[0], player[1] - 1];

                    if (grid[player[0]][player[1] - 1] === 'G') {
                        newState.grid[player[0]][player[1] - 1] = 'PG';
                    }
                    else {
                        newState.grid[player[0]][player[1] - 1] = 'P';
                    }

                    if (grid[player[0]][player[1]] === 'PG') {
                        newState.grid[player[0]][player[1]] = 'G';
                    }
                    else {
                        newState.grid[player[0]][player[1]] = '_';
                    }
                }

                return newState;
            }
        }
        if (action.event.key === "ArrowRight") {
            if (player[1] + 1 < grid[0].length && grid[player[0]][player[1] + 1] !== 'W') {
                let newState = {
                    grid: JSON.parse(JSON.stringify(grid)),
                    player: player.slice(),
                    movers: JSON.parse(JSON.stringify(movers)),
                    ...state
                }

                if (grid[player[0]][player[1] + 1] === 'M' || grid[player[0]][player[1] + 1] === 'MG') {
                    if (player[1] + 2 < grid[0].length && grid[player[0]][player[1] + 2] !== 'W' && grid[player[0]][player[1] + 2] !== 'M' && grid[player[0]][player[1] + 2] !== 'MG') {
                        const moverIndex = movers.findIndex((mover) => { return (mover[0] === player[0] && mover[1] === player[1] + 1) })
                        newState.player = [player[0], player[1] + 1];
                        newState.movers[moverIndex] = [player[0], player[1] + 2];
                        
                        if (grid[player[0]][player[1] + 2] === 'G') {
                            newState.grid[player[0]][player[1] + 2] = "MG";
                        }
                        else {
                            newState.grid[player[0]][player[1] + 2] = "M";
                        }

                        if (grid[player[0]][player[1] + 1] === 'MG') {
                            newState.grid[player[0]][player[1] + 1] = 'PG';
                        }
                        else {
                            newState.grid[player[0]][player[1] + 1] = 'P';
                        }

                        if (grid[player[0]][player[1]] === 'PG') {
                            newState.grid[player[0]][player[1]] = 'G';
                        }
                        else {
                            newState.grid[player[0]][player[1]] = '_';
                        }
                    }
                }
                else {
                    newState.player = [player[0], player[1] + 1];

                    if (grid[player[0]][player[1] + 1] === 'G') {
                        newState.grid[player[0]][player[1] + 1] = 'PG';
                    }
                    else {
                        newState.grid[player[0]][player[1] + 1] = 'P';
                    }

                    if (grid[player[0]][player[1]] === 'PG') {
                        newState.grid[player[0]][player[1]] = 'G';
                    }
                    else {
                        newState.grid[player[0]][player[1]] = '_';
                    }
                }

                return newState;
            }
        }
    }

    return state;
}

export default gameBoardReducer;