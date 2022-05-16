import { useState } from 'react';

const useWorlds = (solution) => {
    const [turn, setTurn]                 = useState(0);
    const [guesses, setGuesses]           = useState([...Array(6)]);
    const [history, setHistory]           = useState(['hello', 'world']);
    const [isCorrect, setIsCorrect]       = useState(false);
    const [currentGuess, setCurrentGuess] = useState('');

    /**
     * format a guess into an array of letters
     */
    const formatGuess = () => {
        let solutionArray  = [...solution];
        let formattedGuess = [...currentGuess].map((letter) => {
            return {key: letter, color: 'grey'}
        });

        // find any green letters
        formattedGuess.forEach((el, i) => {
            if (solutionArray[i] === el.key) {
                formattedGuess[i].color = 'green';
                solutionArray[i] = null;
            }
        });

        // find any yellow letters 
        formattedGuess.forEach((el, i) => {
            solutionArray.forEach((letter, j) => {
                if (letter === el.key) {
                    formattedGuess[i].color = 'yellow';
                    solutionArray[j] = null;
                }
            });
        });

        return formattedGuess;
    }

    /**
     * add new guess to the guesses state
     * update isCorrect state if the guess is correct
     * add one to the turn state
     */
    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true);
        }

        setGuesses((prevGuesses) => {
            const newGuesses = [...prevGuesses];
            newGuesses[turn] =formattedGuess;

            return newGuesses;
        });

        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess];
        });

        setTurn((prevTurn) => {
            return prevTurn + 1;
        });

        setCurrentGuess('');
    }

    /**
     * handle keyup event & track current guess
     * if user presses enter, add new guess
     */
    const handleKeyup = ({ key }) => {
        if (key === 'Enter') {
            // only add guest if turn is less than 5
            if (turn > 5) {
                console.log('no more attempts');

                return;
            }

            // do not allow duplicate words
            if (history.includes(currentGuess)) {
                console.log('you already tried that word');

                return;
            }

            // word is 5 chars long
            if (currentGuess.length !== 5) {
                console.log('word must be 5 chars long');

                return;
            }

            const colorized = formatGuess();
            console.log(colorized);
        }

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