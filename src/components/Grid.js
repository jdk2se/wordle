import React from 'react'
import Row from './Row'

export default function Grid({ guesses, currentGuess, turn }) {
  return (
    <div>
      {guesses.map((g, index) => {
        return <Row key={index} guess={g} /> 
      })}
    </div>
  )
}