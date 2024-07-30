import React from 'react'
import './Searchbar.css'
import { CiSearch } from "react-icons/ci";
import './Searchbar.css'

function Searchbar() {
  return (
  <>
 <div className='search'>
 <CiSearch />
  <input type="text" placeholder='Type to search ...'/>
 </div>
 

  </>
  )
}

export default Searchbar