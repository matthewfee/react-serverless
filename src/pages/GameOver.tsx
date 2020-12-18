import React from 'react'
import { useHistory } from 'react-router-dom'
import { useScore } from '../contexts/ScoreContext'

export default function GameOver() {
    const [score] = useScore()
    const history = useHistory()

    if (score === -1) {
        history.push('/')
    }

    return (
        <div>
            <h1>Game Over</h1>
            <p>{score}</p>
        </div>
    )
}
