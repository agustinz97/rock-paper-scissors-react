import React, { useState } from 'react'

//Icons
import rockIcon from '../../images/icon-rock.svg'
import paperIcon from '../../images/icon-paper.svg'
import scissorsIcon from '../../images/icon-scissors.svg'

import { TokenStyled } from './styles'

const TYPES = {
    rock: {
        icon: rockIcon,
        baseColor: 'hsl(349, 71%, 52%)',
        shadowColor: 'hsl(349, 70%, 56%)',
    },
    paper: {
        icon: paperIcon,
        baseColor: 'hsl(230, 89%, 62%)',
        shadowColor: 'hsl(230, 89%, 65%)',
    },
    scissors: {
        icon: scissorsIcon,
        baseColor: 'hsl(39, 89%, 49%)',
        shadowColor: 'hsl(40, 84%, 53%)',
    },
}

export const Token = function (props) {
    const selectedType = TYPES[props.type] || null

    function handleClick(element) {
        if (props.handleClick) {
            props.handleClick(element)
        }
    }

    return (
        <>
            <TokenStyled
                type={selectedType}
                winner={props.winner || null}
                clickable={props.handleClick ? true : false}
                onClick={() => handleClick(this)}
            >
                <img src={TYPES[props.type]?.icon} alt="" />
            </TokenStyled>
        </>
    )
}
