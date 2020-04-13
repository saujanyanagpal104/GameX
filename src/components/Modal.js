import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const appRoot = document.getElementById('root');
const modalRoot = document.getElementById('modal-root');

const Modal = (props) => {
    let el = document.createElement('div');
    el.setAttribute('class', 'modal');
    useEffect(() => {
        modalRoot.appendChild(el);

        return function unmount() {
            modalRoot.removeChild(el);
        };
    }, []);

    return ReactDOM.createPortal(props.children, el);
};

export default Modal;
