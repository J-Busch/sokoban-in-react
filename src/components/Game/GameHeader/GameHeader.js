import { useRef, useEffect, useState, useContext } from 'react';

import './GameHeader.css';

import LevelItem from "./LevelItem";
import LevelPath from "./LevelPath";
import GameContext from '../../../store/game-context';

const GameHeader = (props) => {
    const gameCtx = useContext(GameContext);
    const [paths, setPaths] = useState([]);

    let headerItems = [];
    let itemRefs = useRef([]);

    for (let i = 1; i <= props.totalLevels; i++) {
        const getRef = (element) => (itemRefs.current.push(element))
        const glow = i <= gameCtx.gameStatus ? 'level_item--glow' : '';
        headerItems.push(
            <LevelItem classes={glow} key={`item_${i}`} ref={getRef}>{i}</LevelItem>
        );
    }

    useEffect(() => {
        let newPaths = [];
        for (let i = 1; i < gameCtx.gameStatus; i++) {
            const x = itemRefs.current[i -1].offsetLeft + itemRefs.current[i -1].offsetWidth;
            const y = itemRefs.current[i -1].offsetTop + itemRefs.current[i -1].offsetHeight / 2;
            const x2 = itemRefs.current[i].offsetLeft;
            const y2 = itemRefs.current[i].offsetTop + itemRefs.current[i].offsetHeight / 2;

            newPaths.push(
                <LevelPath key={`path_${i}`} coords={{start: [x,y], end: [x2,y2]}}></LevelPath>
            );
        }
        setPaths(newPaths);
    }, [gameCtx.gameStatus])

    return (
        <div className='game_header'>
            { headerItems }
            { paths }
        </div>
    );
};

export default GameHeader;