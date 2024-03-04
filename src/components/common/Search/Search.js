import React from 'react'
import '../Search/Search.css'
import SearchIcon from '@mui/icons-material/Search';
function Search({handleSearch}) {
  return (
    <div className='SearchContainer'>
      <input type="text" placeholder='Search With Name' className='SearchBox' onChange={handleSearch}/>
      <div className='searchIcon'><SearchIcon/></div>
    </div>
  )
}

export default Search
