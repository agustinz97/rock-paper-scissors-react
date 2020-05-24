import styled, { keyframes } from 'styled-components'

const click = keyframes`
    to {
        box-shadow: 0 0 0 40px rgba(255,255,255,.04), 0 0 0 80px rgba(255,255,255,.04), 0 0 0 120px rgba(255,255,255,.02);
        transform: rotateZ(360deg) scale(1.1);
    }
`

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`

export const TokenStyled = styled.div`
    width: 130px;
    height: 130px;
    margin: 1rem auto;

    background-color: #f2f2f2;
    border-radius: 50%;
    border: 15px solid var(${props => props.type.baseColor});
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        animation: ${pulse} 1s infinite;
    }
`
