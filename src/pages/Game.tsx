import React, { useState, useEffect, useCallback } from 'react'
import { Strong, StyledCharacter, StyledGame, StyledScore, StyledTimer } from '../styled/Game'
import { useHistory } from 'react-router-dom'
import { useScore } from '../contexts/ScoreContext'

export default function Game() {
    const history = useHistory()
    const MAX_SECONDS = 10
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const [currentCharacter, setCurrentCharacter] = useState('')
    const [score, setScore] = useScore()
    const [ms, setMs] = useState(0)
    const [seconds, setSeconds] = useState(MAX_SECONDS)

    useEffect(() => {
        setRandomCharacter()
        setScore(0)

        const currentTime = new Date()
        const interval = setInterval(() => updateTime(currentTime), 1)
        return () => {
            clearInterval(interval)
        }
    }, [setScore])

    useEffect(() => {
        if (seconds <= -1) {
            history.push('/gameOver')
        }
    }, [seconds, ms, history])

    const keyUpHandler = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === currentCharacter) {
                console.log('MATCH FOUND')
                setRandomCharacter()
                setScore((prevScore: number) => prevScore + 1)
            } else {
                if (score > 0) {
                    setScore((prevScore: number) => prevScore - 1)
                }
                setRandomCharacter()
            }
        },
        [currentCharacter, score, setScore]
    )

    useEffect(() => {
        document.addEventListener('keyup', keyUpHandler)

        return () => {
            document.removeEventListener('keyup', keyUpHandler)
        }
    }, [keyUpHandler])

    const setRandomCharacter = () => {
        const randomInt: number = Math.floor(Math.random() * 36)
        setCurrentCharacter(characters[randomInt])
    }

    const updateTime = (startTime: Date) => {
        const endTime = new Date()
        const msPassedStr = (endTime.getTime() - startTime.getTime()).toString()
        const formattedMsString = ('0000' + msPassedStr).slice(-5)

        const updatedSeconds = MAX_SECONDS - parseInt(formattedMsString.substring(0, 2)) - 1

        const updatedMs = 1000 - parseInt(formattedMsString.substring(formattedMsString.length - 3))

        const addLeadingZeros = (num: number, length: number) => {
            let zeros = ''
            for (let i = 0; i < length; i++) {
                zeros += '0'
            }

            return parseInt((zeros + num).slice(-length))
        }

        setSeconds(addLeadingZeros(updatedSeconds, 2))
        setMs(addLeadingZeros(updatedMs, 3))
    }

    console.log('CURRENT CHARACTER', currentCharacter)

    return (
        <StyledGame>
            <StyledScore>
                Score:
                <Strong>{score}</Strong>
            </StyledScore>
            <StyledCharacter>{currentCharacter}</StyledCharacter>
            <StyledTimer>
                Time:
                <Strong>
                    {seconds}:{ms}
                </Strong>
            </StyledTimer>
        </StyledGame>
    )
}
