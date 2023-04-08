import { React, useEffect } from 'react';
import PropTypes from 'prop-types';
import css from "./Modal.module.css";

const Modal = ({onClose, largeImageURL}) => {

    const handleClick = (evt) => {
        const currentTarget = evt.currentTarget
        if (currentTarget === evt.target) {
            onClose()
        }
    }

    useEffect(() => {
        const handlePressEsc = (evt) => {
            if (evt.code === "Escape") { 
                onClose()
            }
        }
        document.addEventListener("keydown", handlePressEsc)

        return () => {
            document.removeEventListener("keydown", handlePressEsc)
        }
    }, [onClose])
    

  return (
    <div className={css.overlay} onClick={handleClick} >
        <div className={css.modal}>
            <img src={largeImageURL} alt="" />
        </div>
    </div>
  )
}

export default Modal

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

