import './App.css';
import "../apiCalls"
import {useState, useEffect} from "react"
import {Routes, Route} from "react-router-dom"
import SearchDefinitions from '../Components/SearchDefinitions/SearchDefinitions';
import DictionaryContainer from '../Components/DictionaryContainer/DictionaryContainer';
import ThesaurusContainer from '../Components/ThesaurusContainer/ThesaurusContainer';
import Navigation from '../Components/Navigation/Navigation';
import LandingPage from '../Components/LandingPage/LandingPage';
import ErrorPage from '../Components/ErrorPage/ErrorPage';

function App() {
  const [selectedWord, setSelectedWord] = useState("") 
  const [searchType, setSearchType] = useState("dictionary")

const handleSearch = (searchedWord, searchType) => {
  setSearchType(searchType)
  setSelectedWord(searchedWord)
}

const DictionaryRoute = ({ selectedWord, handleSearch }) => (
  <>
      <Navigation className="nav-search"/>
      <SearchDefinitions className="nav-search" handleSearch={handleSearch}/>
      <DictionaryContainer className="word-container" selectedWord={selectedWord} />
  </>
);

const ThesaurusRoute = ({ selectedWord, handleSearch }) => (
  <>
    <Navigation className="nav-search"/>
    <SearchDefinitions className="nav-search" handleSearch={handleSearch}/>
    <ThesaurusContainer className="word-container" selectedWord={selectedWord} />
  </>
);


  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/dictionary" element={<DictionaryRoute className="word-container" selectedWord={selectedWord} handleSearch={handleSearch} />}/>
        <Route path="/thesaurus" element={<ThesaurusRoute className="word-container" selectedWord={selectedWord} handleSearch={handleSearch}/>}/>
        <Route path='*' element={<ErrorPage errorMessage="Page Not Found. Please double check the URL." />} />
      </Routes>
    </main>
)
}

export default App;
