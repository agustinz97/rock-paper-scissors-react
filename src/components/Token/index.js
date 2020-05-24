import React, { useState } from 'react'

//Icons
import rockIcon from '../../images/icon-rock.svg'
import paperIcon from '../../images/icon-paper.svg'
import scissorsIcon from '../../images/icon-scissors.svg'

import { TokenStyled } from './styles'

const TYPES = {
    rock: {
        icon: rockIcon,
        baseColor: '--rockStart',
        shadowColor: '--rockEnd',
    },
    paper: {
        icon: paperIcon,
        baseColor: '--paperStart',
        shadowColor: '--paperEnd',
    },
    scissors: {
        icon: scissorsIcon,
        baseColor: '--scissorsStart',
        shadowColor: '--scissorsEnd',
    },
}

export const Token = function (props) {
    const selectedType = TYPES[props.type]

    return (
        <TokenStyled type={selectedType}>
            <img src={TYPES[props.type]?.icon} alt="" />
        </TokenStyled>
    )
}
