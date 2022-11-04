import words from './wordList.json'
import {useCallback, useState} from 'react'

function getWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function App() {

    const [wordToGuess, setWordToGuess] = useState(getWord)
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter)
    )

    const isLoser = incorrectLetters.length >= 6
    const isWinner = wordToGuess
        .split("")
        .every(letter => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter) || isLoser || isWinner) return

            setGuessedLetters(currentLetters => [...currentLetters, letter])
        },
        [guessedLetters, isWinner, isLoser]
    )


    return (
        <div>
            Test
        </div>
    )
}

export default App
