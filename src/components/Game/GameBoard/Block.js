import './Block.css';

const Block = (props) => {
    return (
        <div className={`block block--${props.classes}`} coords={props.coords}>
            { (props.classes === 'player-on-goal' || props.classes === 'mover-on-goal') ? <div className={`block__inner block__inner--${props.classes}`}></div> : '' }
        </div>
    );
};

export default Block;