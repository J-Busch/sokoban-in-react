import ReactDOM from 'react-dom';

import './Modal.css';

import Card from './Card';

const Backdrop = (props) => {
    return <div className='backdrop' onClick={props.onClose} />;
};

const Overlay = (props) => {
    return (
        <Card classes="modal">
            <div className="content">{props.children}</div>
        </Card>
    );
};

const Modal = (props) => {
    return (
        <>
            { ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                document.getElementById('overlays')
            ) }
            { ReactDOM.createPortal(
                <Overlay>{props.children}</Overlay>,
                document.getElementById('overlays')
            )}
        </>
    );
};

export default Modal;