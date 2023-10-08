import { useContext, useState } from 'react';

import './Header.css';

import Button from '../UI/Button';
import Modal from '../UI/Modal';
import Rules from '../Game/Rules';
import GameContext from '../../store/game-context';

const Header = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const gameCtx = useContext(GameContext);

    const rulesClickHandler = () => {
        setModalOpen((prevState) => !prevState);
    }

    return (
        <header className="header">
            <h1 className="header__title">Sokoban In React</h1>
            <h4>Development in progress...</h4>
            <div>
                { gameCtx.gameStatus > 0 ? <Button classes="header__button" onClick={rulesClickHandler}>Rules</Button> : '' }
                <a className=" btn header__button" href="https://github.com/J-Busch/sokoban-in-react" target="_blank" rel="noreferrer">Github</a>
            </div>
            { modalOpen && <Modal onClose={rulesClickHandler}>
                <Rules onSubmit={rulesClickHandler}></Rules>
            </Modal> }
        </header>
    );
}

export default Header;