import React, { useState } from 'react'

import rulesImg from '../../images/image-rules.svg'
import closeIcon from '../../images/icon-close.svg'

import { RulesStyled } from './styles'

export const Rules = function (props) {
    return (
        <RulesStyled visible={props.visible}>
            <h2>Rules</h2>
            <img src={rulesImg} alt="" />
            <img src={closeIcon} alt="" onClick={props.handleClick} />
        </RulesStyled>
    )
}
