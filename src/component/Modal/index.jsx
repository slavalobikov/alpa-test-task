import ReactDOM from 'react-dom';
import classes from './style.module.scss';
import {useEffect, } from "react";
import useModal from "./hook/useModal";

const Modal = ({ children, closeModal, isAnimated }) => {

    useModal(isAnimated, closeModal)

    return ReactDOM.createPortal(
        <div className={classes.wrapper}>
            <div>{children}</div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;