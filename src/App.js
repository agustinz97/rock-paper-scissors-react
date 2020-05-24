import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'

import tableBg from './images/bg-triangle.svg'

import { Header } from './components/Header'
import { Button } from './components/Button'
import { Token } from './components/Token'
import { Rules } from './components/Rules'

const AppStyled = styled.main`
    min-height: 100vh;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-image: radial-gradient(
        circle at top,
        var(--blue) 0%,
        var(--darkBlue) 100%
    );

    .table {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        background: url(${tableBg}) center no-repeat;
        background-size: 70%;
    }
`

function App() {
    const [rulesVisible, setRulesVisible] = useState(true)

    function handleToggleRules() {
        setRulesVisible(!rulesVisible)
    }

    return (
        <AppStyled>
            <Header></Header>
            <div className="table">
                <Token type="paper" />
                <Token type="scissors" />
                <Token type="rock" />
            </div>
            <Button text="Rules" handleClick={handleToggleRules} />
            <Rules handleClick={handleToggleRules} visible={rulesVisible} />
        </AppStyled>
    )
}

export default App
