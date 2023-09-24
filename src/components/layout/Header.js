import './Header.css';

import Button from '../UI/Button';

const Header = (props) => {
    const rulesClickHandler = () => {
        console.log('clicked rules');
    }

    return (
        <header className="header">
            <h1 className="header__title">Sokoban In React</h1>
            <div>
                <Button classes="header__button" onClick={rulesClickHandler}>Rules</Button>
                <a className=" btn header__button" href="https://github.com/J-Busch/sokoban-in-react" target="_blank" rel="noreferrer">Github</a>
            </div>
        </header>
    );
}

export default Header;