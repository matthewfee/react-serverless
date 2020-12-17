import React, { useState, useEffect } from 'react'
import { Strong, StyledCharacter, StyledGame, StyledScore, StyledTimer } from '../styled/Game'
import { useHistory } from 'react-router-dom'

export default function Game() {
    const [score, setScore] = useState<number>(0)
    const MAX_SECONDS = 5
    const [ms, setMs] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(MAX_SECONDS)
    const [gameOver, setGameOver] = useState<boolean>(false)

    const history = useHistory()

    useEffect(() => {
        const currentTime = new Date()
        const interval = setInterval(() => updateTime(currentTime), 1)
        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        if (seconds <= -1) {
            history.push('/gameOver')
        }
    }, [seconds, ms, history])

    const keyUpHandler = (e: KeyboardEvent) => {
        console.log(e.key)
    }

    useEffect(() => {
        document.addEventListener('keyup', keyUpHandler)

        return () => {
            document.removeEventListener('keyup', keyUpHandler)
        }
    }, [])

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

    return (
        <StyledGame>
            <StyledScore>
                Score:
                <Strong>{score}</Strong>
            </StyledScore>
            <StyledCharacter>A</StyledCharacter>
            <StyledTimer>
                Time:
                <Strong>
                    {seconds}:{ms}
                </Strong>
            </StyledTimer>
        </StyledGame>
    )
}
