import React from 'react'

import { ButtonStyled } from './styles'

export const Button = function (props) {
    return <ButtonStyled onClick={props.handleClick}>{props.text}</ButtonStyled>
}
