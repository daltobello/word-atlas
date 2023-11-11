import "./SearchDefinitions.css"
import {useState, useEffect} from "react"

function SearchDefinitions({handleSearch}) {
  const [searchedWord, setSearchedWord] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    handleSearch(searchedWord, "dictionary")
    // clearInput()
  }

  // function clearInput() {
  //   setSearchedWord("")
  // }

// searched word state in form, gets passed up to App
// hold state in form, send to App when invoking search?
// useState here. 

  return (
    <div className="search-container">
      <form className="form-input" onSubmit={handleSubmit}>
        <input className="search-input"
        type="text"
        name="word-search"
        placeholder="Search for a word..."
        value={searchedWord}
        onChange={(event) => setSearchedWord(event.target.value)}
        />
        <button className="submit-search">Submit</button>
      </form>
    </div>
  )
}

export default SearchDefinitions