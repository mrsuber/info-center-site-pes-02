import { useState } from 'react'
import './Search.css'



const Search = () =>{
  const [ search, setSearch] = useState('')
  return(
    <div className="info__header_search_container search w-100 position-relative">
      <input type="text" className="info__header_search_input form-control"
      value={search} placeholder="Enter your search..."
      />
    </div>
  )
}

export default Search
