import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default styled(Link)`
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`
