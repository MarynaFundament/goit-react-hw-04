import toast, { Toaster } from 'react-hot-toast';

import SearchBar from "./SearchBar/SearchBar";
// import Error from './ErrorMessage/ErrorMessage';
import ImageGallery from "./ImageGallery/ImageGallery"

import ArticleList from "./ArticleList/ArticleList";

import { useState, useEffect } from "react";
import { fetchArticles } from "./article-api";


export const App = () => {

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => async function getData() {
    try {
      setIsLoading(true)
      setArticles([]);
      setError(false)
    
      const data = await fetchArticles(newQuery);
      setArticles(data);
    
    } catch(e){
      setError(true)
    
    } finally {
      setIsLoading(false)
    
    }
  
  getData()
  }, [])


  const handleSearch = async (newQuery) => {

  setIsLoading(true)
  setError(false)
  setArticles([]);

}


  return (
    <div>

  <SearchBar onQuery={handleSearch} />
  
  {isLoading && <b> Loading now !</b>}
  {articles.length > 0 && <ArticleList items={articles}/>}
  {error && <b> Oops! Error! Reload! </b>}
  
    </div>
  );
}
