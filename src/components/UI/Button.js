import classes from './Button.css';

const Button = (props) => {
    return (
        <button
            className={`${classes.btn} ${props.classes}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;