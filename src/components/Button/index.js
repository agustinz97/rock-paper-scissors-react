import React from 'react'

import { ButtonStyled } from './styles'

export const Button = function (props) {
    return (
        <ButtonStyled onClick={props.handleClick} className={props.type || ''}>
            {props.text}
        </ButtonStyled>
    )
}
