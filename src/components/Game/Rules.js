import './Rules.css';
import arrowKeyImg from '../../assets/arrows.png';
import rKey from '../../assets/r_key.png';

import Button from '../UI/Button';
import Block from '../Game/GameBoard/Block';

const Rules = (props) => {
    return(
        <section className="rules">
            <h1>About</h1>
            <p>Sokoban (Japanese for "warehouse keeper") is a puzzle game from the 80's where the player pushes boxes around in a warehouse to fit them into their storage locations. "Sokoban" is now commonly used to refer to a similar type of space constraint puzzle game.</p>
            <h2>How To Play</h2>
            <ul>
                <li>You control the player block {<Block classes="player block--rules"></Block>} using the arrow keys <img className="rules__image" src={arrowKeyImg} alt="the arrow keys" /></li>
                <li>Your goal is to push each of the mover blocks {<Block classes="mover block--rules"></Block>} onto a goal {<Block classes="goal block--rules"></Block>}</li>
                <li>The wall blocks {<Block classes="wall block--rules"></Block>} are rigid bodies. You can not move through them or push blocks past them</li>
                <li>Be careful not to push your way into state that locks you out of winning. If you do, you can press the <img className="rules__image" src={rKey} alt="the r key" /> key to reset the level</li>
                <li>Good luck!</li>
            </ul>
            
            <h2>Dev TODOS:</h2>
            <ul>
                <li>Make things actually look good</li>
                <li>Refactor GameBoard and GameBoardReducer</li>
                <li>Clean up transitions</li>
                <li>Implement some simple session storage to remember what level the player is on</li>
                <li>Put a restart button on the congratulations screen</li>
            </ul>
            <Button onClick={props.onSubmit}>Close</Button>
        </section>
    );
};

export default Rules;