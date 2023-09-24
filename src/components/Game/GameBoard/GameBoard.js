import './GameBoard.css';

import Block from './Block';
import Row from './Row';

const GameBoard = (props) => {
    const grid = [
        ['_','_','_','_','_','_','_','_','_','_','_','_'],
        ['_','_','_','_','_','_','_','_','_','_','_','_'],
        ['_','_','_','_','_','_','_','_','_','_','_','_'],
        ['_','_','_','_','_','_','_','_','_','_','_','_'],
        ['_','_','_','_','_','_','_','_','_','_','_','_'],
        ['_','_','_','_','_','_','_','_','_','_','_','_'],
        ['_','_','_','_','_','_','_','_','_','_','_','_'],
        ['_','_','_','_','_','_','_','_','_','_','_','_'],
    ];

    const blocks = grid.map((row, i) => {
        const newRow = row.map((col, j) => {
            return (
                <Block classes='' coords={[i, j]} key={`${i}_${j}`} />
            );
        });
        return <Row key={`row_${i}`}>{newRow}</Row>;
    });

    return (
        <div className='game_board'>
            {blocks}
        </div>
    );
};

export default GameBoard;