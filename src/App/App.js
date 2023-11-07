import './App.css';
import "../apiCalls"
import {useState, useEffect} from "react"
import getWordDefinition from '../apiCalls';

function App() {

  const [word, setWord] = useState([])
  const [networkError, setNetworkError] = useState("")

  useEffect(() => {
    getWordDefinition()
    .then(word => {
      console.log("word", word)
      setWord(word)
    })
    .catch(error => setNetworkError(error.message))
  }, [])





  return (
    <main className="App">
      <h1>Word Atlas</h1>
    </main>
  );
}

export default App;
