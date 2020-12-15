import React from 'react'
import { Strong, StyledCharacter, StyledGame, StyledScore, StyledTimer } from '../styled/Game'

export default function Game() {
    return (
        <StyledGame>
            <StyledScore>
                Score:
                <Strong>0</Strong>
            </StyledScore>
            <StyledCharacter>A</StyledCharacter>
            <StyledTimer>
                Time:
                <Strong>00:000</Strong>
            </StyledTimer>
        </StyledGame>
    )
}
