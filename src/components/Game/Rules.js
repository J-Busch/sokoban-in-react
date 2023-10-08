import './Rules.css';
import arrowKeyImg from '../../assets/arrows.png';

import Button from '../UI/Button';

const Rules = (props) => {
    return(
        <section className="rules">
            <p>A sokoban puzzle is a space constraint puzzle. It requires the manipulation of pieces within a limited area until the win state has been reached.</p>
            <h1>How To Play</h1>
            <ul>
                <li>You control the (playerblock) block using <img className="rules__image" src={arrowKeyImg} alt="the arrow keys" /></li>
                <li>Your goal is to push all of the (sliderblock) blocks onto the (goalspace) spaces.</li>
                <li>The (wallblock) blocks are rigid bodies. You can not move through them or push blocks past them.</li>
                <li>Be careful not to push your way into state that locks you out of winning. If you do, you can press (spacebar) to reset the level.</li>
                <li>If you ever need to read these rules again, you can bring them up by pressing (R key) or clicking the rules button in the header.</li>
                <li>Good luck!</li>
            </ul>
            <Button onClick={props.onSubmit}>Close</Button>
        </section>
    );
};

export default Rules;