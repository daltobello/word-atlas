import './App.css';
import "../apiCalls"
import {useState} from "react"
import {Routes, Route} from "react-router-dom"
import SearchDefinitions from '../Components/SearchDefinitions/SearchDefinitions';
import DictionaryContainer from '../Components/DictionaryContainer/DictionaryContainer';
import ThesaurusContainer from '../Components/ThesaurusContainer/ThesaurusContainer';
import Navigation from '../Components/Navigation/Navigation';
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

function App() {
  const [selectedWord, setSelectedWord] = useState("") 


const handleSearch = (searchedWord) => {
  setSelectedWord(searchedWord)
}

const DictionaryRoute = ({ selectedWord, setSelectedWord, handleSearch }) => (
  <>
      <Navigation className="nav-search"/>
      <SearchDefinitions className="nav-search" handleSearch={handleSearch}/>
      <DictionaryContainer className="word-container" selectedWord={selectedWord}  setSelectedWord={setSelectedWord}/>
  </>
);

const ThesaurusRoute = ({ selectedWord, setSelectedWord, handleSearch }) => (
  <>
    <Navigation className="nav-search"/>
    <SearchDefinitions className="nav-search" handleSearch={handleSearch}/>
    <ThesaurusContainer className="word-container" selectedWord={selectedWord} setSelectedWord={setSelectedWord} />
  </>
);

  return (
    <main className="App">
      <ThemeSwitcher />
      <Routes>
        <Route path="/" element={<DictionaryRoute className="word-container" selectedWord={selectedWord} handleSearch={handleSearch} setSelectedWord={setSelectedWord}/>}/>
        <Route path="/thesaurus" element={<ThesaurusRoute className="word-container" selectedWord={selectedWord} handleSearch={handleSearch} setSelectedWord={setSelectedWord}/>}/>
        <Route path='*' element={<ErrorPage errorMessage="Page Not Found. Please double check the URL." />} />
      </Routes>
    </main>
)
}

export default App;
