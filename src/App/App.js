import './App.css';
import "../apiCalls"
import {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom"
// import getWordDefinition from '../apiCalls';
import SearchDefinitions from '../Components/SearchDefinitions/SearchDefinitions';
import WordContainer from '../Components/WordContainer/WordContainer';
import ThesaurusContainer from '../Components/ThesaurusContainer/ThesaurusContainer';
import Header from '../Components/Header/Header';

function App() {
  const [selectedWord, setSelectedWord] = useState("") // set state to nothing??
  const [networkError, setNetworkError] = useState("")
  const [searchType, setSearchType] = useState("dictionary")

  // pass searchType to Thesaurus component 
  // route for dictionary, route for thesaurus


const handleSearch = (searchedWord, searchType) => {
  setSearchType(searchType)
  setSelectedWord(searchedWord)
}
 
  return (
    <main className="App">
        <Header />
        <SearchDefinitions handleSearch={handleSearch}/>
      <Routes>
        {/* <Route path="/" element={<SearchDefinitions handleSearch={handleSearch}/>} /> */}
        <Route  path="/dictionary" element={<WordContainer className="word-container" selectedWord={selectedWord} setNetworkError={setNetworkError}/>}/>
       <Route path="/thesaurus" element={<ThesaurusContainer className="thesaurus" selectedWord={selectedWord} setNetworkError={setNetworkError}/>}/>
      </Routes>
    </main>
  )
}
// separate component for thesaurus. pass selectedWord as a string, 
export default App;

// depending on searchType, route to dictionary or thesaurus. 
// create homepage, word of the day. 
// 