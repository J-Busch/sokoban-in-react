import './Block.css';

const Block = (props) => {
    return (
        <div className={`block ${props.classes}`} coords={props.coords}></div>
    );
};

export default Block;