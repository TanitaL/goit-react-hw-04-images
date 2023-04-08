import { React, useEffect, useState} from "react";
import { toast, Toaster } from 'react-hot-toast';
import { getImages } from "services/fetch";
import Searchbar from "./Searchbar/Searchbar";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import css from "./App.module.css";


const App = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalHits, setTotalHits] = useState(0)
  const [searchWord, setSearchWord] = useState('')

  const changePage = () => {
      setPage((prevState) => prevState + 1)
  }

  useEffect(() => {

    if (!searchWord) {
        return
    }
          
    setIsLoading(true)
    getImages(searchWord, page).then((data) => {
      if (data.status === "error") return Promise.reject(data.message)

      setTotalHits(data.totalHits)
      setImages(prevImages => [...prevImages, ...data.hits])

      if (!data.totalHits) {
          toast.error('Sorry, no images')
      }
      else toast.success(`Found ${data.totalHits} images`)
    }).catch((error) => {
        console.log(error)
    }).finally(() => {
        setIsLoading(false)
    })
  }, [searchWord, page]
  )

  const handleFormSubmit = newSearchWord => { 
    if (searchWord === newSearchWord) { 
      return
    }
    setSearchWord(newSearchWord);
    setImages([]);
    setPage(1);
  }

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}

      {images.length > 0 && (
        <ImageGallery
          images={images}
        />
      )}

      {images.length !== totalHits && <Button changePage={changePage} />}
      <Toaster position="top-right"/>
    </div>
  )
}

export default App


  