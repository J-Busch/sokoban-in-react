//import classes from './GameHeader.css';

import LevelItem from "./LevelItem";
import LevelPath from "./LevelPath";

const GameHeader = (props) => {
    return (
        <>
            <div>Game Header</div>
            <LevelItem></LevelItem>
            <LevelPath></LevelPath>
        </>
    );
};

export default GameHeader;