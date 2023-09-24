import './Button.css';

const Button = (props) => {
    return (
        <button
            className={`btn ${props.classes}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;