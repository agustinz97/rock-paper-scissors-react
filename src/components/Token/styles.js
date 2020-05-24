import styled, { keyframes } from 'styled-components'

const click = keyframes`
    to {
        box-shadow: 0 0 0 25px rgba(255,255,255,.04), 0 0 0 50px rgba(255,255,255,.04), 0 0 0 75px rgba(255,255,255,.02);
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

    background-color: ${props => (props.type ? '#f2f2f2' : 'var(--darkBlue)')};
    border-radius: 50%;
    border: 15px solid;
    border-color: ${({ type }) => type?.baseColor || 'transparent'};
    cursor: pointer;
    pointer-events: ${({ clickable }) => (clickable ? 'all' : 'none')};

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    animation: ${({ winner }) => (winner ? click : '')} 1s;
    animation-fill-mode: forwards;

    p{
        font-size: 16px;
        color: #fff;
        text-transform: uppercase;
        position: absolute;
        bottom: -50%;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
        white-space: nowrap;
    }

    /* &:hover {
        animation: ${pulse} 1s infinite;
    } */
`
