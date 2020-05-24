import React, { useContext } from 'react'

import { ScoreStyled } from './styles'
import { ScoreContext } from '../../App'

export const Score = function () {
    const { score } = useContext(ScoreContext)

    return (
        <ScoreStyled>
            <small>Score</small>
            <h3>{score}</h3>
        </ScoreStyled>
    )
}
