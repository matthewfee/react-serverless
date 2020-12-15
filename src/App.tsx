import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Game from './pages/Game'
import HighScores from './pages/HighScores'
import GameOver from './pages/GameOver'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Container } from './styled/Container'
import { Main } from './styled/Main'
import Global from './styled/Global'

function App() {
    return (
        <Main>
            <Global />
            <Container>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/game" component={Game}></Route>
                        <Route path="/highScores" component={HighScores}></Route>
                        <Route path="/gameOver" component={GameOver}></Route>
                        <Route path="/" component={Home}></Route>
                    </Switch>
                </Router>
            </Container>
        </Main>
    )
}

export default App
