import './App.css';
import "../apiCalls"
import {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import getWordDefinition from '../apiCalls';
import SearchDefinitions from '../Components/SearchDefinitions/SearchDefinitions';
import WordContainer from '../Components/WordContainer/WordContainer';



function App() {
  
  const [selectedWord, setSelectedWord] = useState({}) // set state to nothing??
  const [networkError, setNetworkError] = useState("")
  const [searchType, setSearchType] = useState("dictionary")


const handleSearch = (searchedWord, searchType) => {
  if(searchType === "dictionary")
  setSearchType(searchType)
  getWordDefinition(searchedWord) 
  .then((word) => {
    setSelectedWord(word[0])
  })
  .catch(error => setNetworkError(error.message))
}
 


  return (
    <main className="App">
        <h1>Word Atlas</h1>
      {/* <Routes> */}
      <SearchDefinitions handleSearch={handleSearch}/>
      <WordContainer className="word-container" selectedWord={selectedWord}/>
      {/* </Routes> */}
    </main>
  )
}

export default App;
