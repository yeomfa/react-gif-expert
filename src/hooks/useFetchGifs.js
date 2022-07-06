import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = category => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async() => {

    const images = await getGifs( category );
    // console.log(images);
    setImages(images);
    setIsLoading(false);

  }

  useEffect(() => {
    
    getImages();

  }, []);
  
  return {
    images,
    isLoading,
  }

}