import { React } from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
    return (
        <>
            {images && (
                <ul className={css.imageGallery}>
                    {images.map(({ id, webformatURL, largeImageURL }) => {
                        return (
                            <ImageGalleryItem
                                key={id}
                                webformatURL={webformatURL}
                                largeImageURL={largeImageURL}
                            />
                        )
                    })}
                </ul>
            )}
        </>
    )
}

export default ImageGallery

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired
};