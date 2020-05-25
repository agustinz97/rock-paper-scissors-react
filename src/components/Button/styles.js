import styled from 'styled-components'

export const ButtonStyled = styled.button`
    padding: 0.7rem 2rem;
    margin: 1em auto;

    background: none;
    border: none;
    border: 2px solid rgba(255, 255, 255, 0.7);
    border-radius: 10px;

    align-self: center;

    text-transform: uppercase;
    font-size: 18px;
    font-weight: normal;
    color: rgba(255, 255, 255, 0.7);
    letter-spacing: 2px;

    &.white {
        background-color: #fff;
        color: var(--scoreText);
    }

    @media (min-width: 1366px) {
        cursor: pointer;
    }
`
