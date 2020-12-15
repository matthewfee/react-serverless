import React from 'react'
import { Link } from 'react-router-dom'
import CTA from '../styled/CTA'
import { Accent, StyledTitle } from '../styled/Random'

export default function Home() {
    return (
        <div>
            <StyledTitle>Ready to type?</StyledTitle>

            <CTA to="/game">
                Click or type <Accent style={{ margin: '0 10px' }}> 's' </Accent> to start playing!
            </CTA>
        </div>
    )
}
