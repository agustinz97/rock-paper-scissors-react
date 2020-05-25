import React, { useState, createContext } from 'react'
import styled from 'styled-components'
import './App.css'

import { Header } from './components/Header'
import { Button } from './components/Button'
import { Rules } from './components/Rules'

import { Table } from './components/Table'

const AppStyled = styled.main`
    height: 100vh;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-image: radial-gradient(
        circle at top,
        var(--blue) 0%,
        var(--darkBlue) 100%
    );

    @media (min-width: 1366px) {
        > button {
            margin-right: 1rem;
        }
    }
`
export const ScoreContext = createContext()

function App() {
    //states
    const [rulesVisible, setRulesVisible] = useState(false)
    const [score, setScore] = useState(0)
    //Toggle rules visibility
    function handleToggleRules() {
        setRulesVisible(!rulesVisible)
    }

    return (
        <ScoreContext.Provider value={{ score, setScore }}>
            <AppStyled>
                <Header />
                <Table />
                <Button text="Rules" handleClick={handleToggleRules} />
                <Rules handleClick={handleToggleRules} visible={rulesVisible} />
            </AppStyled>
        </ScoreContext.Provider>
    )
}

export default App
