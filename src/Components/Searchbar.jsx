import React,{useState}from 'react'
import './Searchbar.css'
import { CiSearch } from "react-icons/ci";


function Searchbar() {
    const[input,setInput]=useState("");
    const fetchData = async (value) => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
          const json = await response.json();
          console.log(json);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      

// const fetchData=(value)=>{
//     fetch("https://jsonplaceholder.typicode.com/users").then ((response)=>response.json())
//     .then((json)=>{
//         console.log(json);
//     })
// }
const handlechange=(value)=>{
    setInput(value);
    fetchData(value);
}
  return (
  <>
 <div className='search'>
 <CiSearch className='searchicon'/>
  <input 
  type="text" 
  placeholder='Type to search ...'
  onChange={(e)=>handlechange(e.target.value)}
  />
 </div>
 

  </>
  )
}

export default Searchbar