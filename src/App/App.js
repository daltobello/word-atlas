import './App.css';
import "../apiCalls"
import {useState, useEffect} from "react"
import getWordDefinition from '../apiCalls';
import SearchDefinitions from '../Components/SearchDefinitions/SearchDefinitions';
import WordContainer from '../Components/WordContainer/WordContainer';


function App() {
  
  const [selectedWord, setSelectedWord] = useState({}) // set state to nothing??
  const [networkError, setNetworkError] = useState("")
  // const [searchedWord, setSearchedWord] = useState("")

  useEffect(() => {
    getWordDefinition("great")
    .then(word => {
      // console.log("word in App:", word[0].meanings[0].definitions[0].definition)
      setSelectedWord(word[0])
    })
    .catch(error => setNetworkError(error.message))
  }, [])

  return (
    <main className="App">
      <h1>Word Atlas</h1>
      {/* <SearchDefinitions searchedWord={searchedWord} setSearchedWord={setSearchedWord}/> */}
      <WordContainer className="word-container" selectedWord={selectedWord}/>

    </main>
  )
}

export default App;
