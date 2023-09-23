import classes from './Header.css';

import Button from '../UI/Button';

const Header = (props) => {
    const rulesClickHandler = () => {
        console.log('clicked rules');
    }

    const githubClickHandler = () => {
        window.open(
            'https://github.com/J-Busch/sokoban-in-react',
            '_blank'
          );
    }

    return (
        <header className={classes.header}>
            <h1 className={classes.title}>Sokoban In React</h1>
            <Button onClick={rulesClickHandler}>Rules</Button>
            <Button onClick={githubClickHandler}>Github</Button>
        </header>
    );
}

export default Header;