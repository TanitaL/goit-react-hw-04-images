import { React, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import css from "./ImageGalleryItem.module.css";


function ImageGalleryItem({webformatURL, largeImageURL}) {
  const [statusModal, setStatusModal] = useState(false)

  const toggleModal = () => {
    setStatusModal(!statusModal)
  };

  return (
    <>
      <li className={css.imageGalleryItem}>
        <img
          className={css.imageGalleryItemImage}
          src={webformatURL}
          alt=""
          onClick={toggleModal}>
        </img>
      </li>
          
      {statusModal && (
        <Modal largeImageURL={largeImageURL} onClose={toggleModal}>
          <img src={largeImageURL} alt="largeImage" />
        </Modal>
      )}
    </>
  )
}

export default ImageGalleryItem


ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};