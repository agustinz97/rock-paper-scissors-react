import React from 'react'

import { HeaderStyled } from './styles'
import { Score } from '../Score'

const Header = function () {
    return (
        <HeaderStyled>
            <h1>
                Rock <br /> Paper <br /> Scissors
            </h1>
            <Score />
        </HeaderStyled>
    )
}

export { Header }
