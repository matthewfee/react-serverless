import React, { useState, useEffect } from 'react'
import { Strong, StyledCharacter, StyledGame, StyledScore, StyledTimer } from '../styled/Game'

export default function Game() {
    const [score, setScore] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setScore((prevScore: number) => prevScore + 1)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [score])

    return (
        <StyledGame>
            <StyledScore>
                Score:
                <Strong>{score}</Strong>
            </StyledScore>
            <StyledCharacter>A</StyledCharacter>
            <StyledTimer>
                Time:
                <Strong>00:000</Strong>
            </StyledTimer>
        </StyledGame>
    )
}
