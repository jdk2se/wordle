import React from 'react'

export default function Modal({isCorrect, turn, solution}) {
  return (
    <div className="modal">
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <p className="solution">{solution}</p>
                <p>You found the solution in {turn} turn</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>You Lose!</h1>
                <p className="solution">{solution}</p>
                <p>sooner or later....</p>
            </div>
        )}
    </div>
  )
}
