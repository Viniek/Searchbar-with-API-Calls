import { useState } from 'react'
import './App.css'
import Searchbar from './Components/Searchbar'
import SearchResultsList from './Components/SearchResultsList';

function App() {
 const[results,setResults]=useState([]);

  return (
    <>
     <Searchbar/> 
     <SearchResultsList results={results}/>
    </>
  )
}

export default App
