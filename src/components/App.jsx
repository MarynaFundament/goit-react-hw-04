import toast, { Toaster } from 'react-hot-toast';

import SearchBar from "./SearchBar/SearchBar";
import Error from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageGallery from "./ImageGallery/ImageGallery"
import Loader from './Loader/Loader';

import { useState, useEffect } from "react";
import { fetchArticles } from "./article-api";
import styles from "./ImageGallery/ImageGallery.module.css"


export const App = () => {

  const [query, setQuery] = useState("")
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

useEffect (() => {

  if(query === ""){
   
    return 
  }

async function getData(){
  
    try {
     setIsLoading(true)
     setError(false)

      const data = await fetchArticles(query, page);

      if (data.length === 0) {
        toast.error('Sorry, there are no images matching your search query. Please try again', { position: 'top-right' });
        return;
      }

      console.log(data)
  
      setArticles(prevArticles => {
        return [...prevArticles, ...data]
      });
    
    } catch(e){
      setError(true)
    
    } finally {
      setIsLoading(false)
    
    }

  }
  getData()
}, [page, query])

 const handleSearch = async (newQuery) => {
  setQuery(newQuery)
  setPage(1)
  setArticles([])
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }



  return (
    <div>

  <SearchBar onQuery={handleSearch} />

  {isLoading && <Loader/>}
  
<div className={styles.layout}>
  {articles.length > 0 && <ImageGallery items={articles} />}
  {articles.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore}/>}
</div>
  {error && <Error />}
  <Toaster/>
  
    </div>
  );
}
