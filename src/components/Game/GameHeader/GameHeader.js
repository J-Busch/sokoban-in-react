import { useRef, useEffect, useState } from 'react';

import './GameHeader.css';

import LevelItem from "./LevelItem";
import LevelPath from "./LevelPath";

const GameHeader = (props) => {
    const levelItemRef = useRef();
    const levelItem2Ref = useRef();

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [x2, setX2] = useState(0);
    const [y2, setY2] = useState(0);

    useEffect(() => {
        if (levelItemRef.current) {
            const x = levelItemRef.current.offsetLeft + levelItemRef.current.offsetWidth;
            const y = levelItemRef.current.offsetTop + levelItemRef.current.offsetHeight / 2;
            setX(x);
            setY(y);
        }
        if (levelItem2Ref.current) {
            const x2 = levelItem2Ref.current.offsetLeft;
            const y2= levelItem2Ref.current.offsetTop + levelItem2Ref.current.offsetHeight / 2;
            setX2(x2);
            setY2(y2);
        }
    }, []);

    return (
        <div className='game_header'>
            <LevelItem ref={levelItemRef} >1</LevelItem>
            { levelItemRef.current && <LevelPath coords={{start: [x,y], end: [x2,y2]}}></LevelPath> }
            <LevelItem ref={levelItem2Ref}>2</LevelItem>
        </div>
    );
};

export default GameHeader;