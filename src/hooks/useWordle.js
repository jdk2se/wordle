import { useState } from 'react';

const useWorlds = (solution) => {
    const [turn, setTurn]                 = useState(0);
    const [guesses, setGuesses]           = useState([]);
    const [history, setHistory]           = useState([]);
    const [isCorrect, setIsCorrect]       = useState(false);
    const [currentGuess, setCurrentGuess] = useState('');

    /**
     * format a guess into an array of letters
     */
    const formatGuess = () => {}

    /**
     * add new guess to the guesses state
     * update isCorrect state if the guess is correct
     * add one to the turn state
     */
    const addNewGuess = () => {}

    /**
     * handle keyup event & track current guess
     * if user presses enter, add new guess
     */
    const handleKeyup = ({ key }) => {
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1);
            })

            return;
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key;
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, handleKeyup}
}

export default useWorlds;