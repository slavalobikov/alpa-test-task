import ReactDOM from 'react-dom';
import classes from './style.module.scss';
import {useEffect, } from "react";

const Modal = ({ children, closeModal, isAnimated }) => {

    useEffect(() => {
        if (isAnimated) {
            setTimeout(() => {
                closeModal()
            }, 500)
        }
    }, [isAnimated])

    return ReactDOM.createPortal(
        <div className={classes.wrapper}>
            <div>{children}</div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;