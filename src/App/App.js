import './App.css';
import "../apiCalls"
import {useState, useEffect} from "react"
import getWordDefinition from '../apiCalls';
import SearchDefinitions from '../Components/SearchDefinitions/SearchDefinitions';
import WordContainer from '../Components/WordContainer/WordContainer';


function App() {
  
  const [selectedWord, setSelectedWord] = useState([])
  const [networkError, setNetworkError] = useState("")
  const [searchedWord, setSearchedWord] = useState("")

  useEffect(() => {
    getWordDefinition("slowly") // pass in searched word from from
    .then(word => {
      // console.log("word in App:", word[0])
      setSelectedWord(word[0])
    })
    .catch(error => setNetworkError(error.message))
  }, [])

  return (
    <main className="App">
      <h1>Word Atlas</h1>
      {/* <SearchDefinitions searchedWord={searchedWord} setSearchedWord={setSearchedWord}/> */}
      <WordContainer selectedWord={selectedWord}/>
    </main>
  )
}

export default App;
