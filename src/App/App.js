import './App.css';
import "../apiCalls"
import {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom"
// import getWordDefinition from '../apiCalls';
import SearchDefinitions from '../Components/SearchDefinitions/SearchDefinitions';
import WordContainer from '../Components/WordContainer/WordContainer';
import ThesaurusContainer from '../Components/ThesaurusContainer/ThesaurusContainer';
import Header from '../Components/Header/Header';
// import ErrorPage from '../Components/ErrorPage/ErrorPage';

function App() {
  const [selectedWord, setSelectedWord] = useState("") 
  // const [networkError, setNetworkError] = useState({hasError: false, message: ""})
  const [searchType, setSearchType] = useState("dictionary")

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
        <Route  path="/dictionary" element={<WordContainer className="word-container" selectedWord={selectedWord} />}/>
       <Route path="/thesaurus" element={<ThesaurusContainer className="thesaurus" selectedWord={selectedWord} />}/>
      </Routes>

    </main>
)
}

export default App;
