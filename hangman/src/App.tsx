import words from './wordList.json'
import {useState} from 'react'

function getWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function App() {

    const [wordToGuess, setWordToGuess] = useState(getWord)

    return (
        <div>
            еуые
        </div>
    )
}

export default App
