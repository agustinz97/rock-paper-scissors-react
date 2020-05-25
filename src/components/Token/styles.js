import styled, { keyframes } from 'styled-components'

const shadow = keyframes`
  to {
    box-shadow: 0 0 0 40px rgba(255,255,255,.04), 0 0 0 80px rgba(255,255,255,.04), 0 0 0 120px rgba(255,255,255,.02);
  }
`
const box = keyframes`
  to {
    transform: rotateY(360deg);
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
    width: 100%;
    height: 100%;
    margin: auto;

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

    animation: ${({ winner }) => (winner ? shadow : '')} 1s;
    animation-fill-mode: forwards;

    img {
        width: 40%;
        animation: ${({ winner }) => (winner ? box : '')} 1s;
    }

    @media (min-width: 1366px) {
        &:hover {
            animation: ${pulse} 1s infinite;
        }
    }
`
