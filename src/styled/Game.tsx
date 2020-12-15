import styled from 'styled-components'

export const StyledGame = styled.div`
    height: 75vh;
    max-height: 500px;
    width: 100%;
    display: grid;
    border: 1px solid blue;
    grid-template-rows: 50px 1fr;
    grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);
    text-align: center;

    & p {
        border: 1px solid green;
    }
`

export const StyledScore = styled.p`
    font-size: 1.5rem;
`

export const StyledTimer = styled.p`
    font-size: 1.5rem;
    grid-column: 3;
`

export const StyledCharacter = styled.p`
    font-size: 15rem;
    grid-row: 2;
    grid-column: 1/4;
`

export const Strong = styled.strong`
    font-weight: bold;
`
