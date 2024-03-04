import toast, { Toaster } from 'react-hot-toast';

import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery"

import ArticleList from "./ArticleList/ArticleList";

import { useState, useEffect } from "react";
import { fetchArticles } from "./article-api";


export const App = () => {

  const [query, setQuery] = useState("")
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false)

  useEffect(() => {
   
    if(query === ""){
      return 
    }

    async function getData(){
      try{
        setIsLoading(true);
        setError(false)
        const data = await fetchArticles(query, page);
        setArticles((prevArticles) => {
          return [...prevArticles, ...data]
        });
      
      } catch (e) {
        setError(true)
  
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [page, query]);

  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery); 
    setPage(1)
};

const handleLoadMore = () => {
  setPage(page + 1)
}

 const handleSearchChange = (value) => {
    setSearchValue(value);
    setArticles([])
  };

  

 

  return (
    <div>

  <SearchBar onChange={handleSearchChange} onQuery={handleSearchSubmit} />
  
  {error && <b>Oops! Error! Reload!</b>}
  {articles.length > 0 && <ArticleList items={articles}/>}
  {articles.length > 0 && !isLoading && 
  <button onClick={handleLoadMore}>Load More</button>}
  {isLoading && <b> Loading articles ...</b>}
      {/*
      <ImageGallery/> */}
     

    </div>
  );
};