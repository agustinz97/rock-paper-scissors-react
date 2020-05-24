import styled from 'styled-components'

export const ScoreStyled = styled.div`
    height: 100%;
    padding: 0.5rem 1.5rem;

    background-color: #fff;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;

    small {
        color: var(--scoreText);
    }

    h3 {
        font-weight: 700;
        font-size: 40px;
        color: var(--darkText);
    }
`
