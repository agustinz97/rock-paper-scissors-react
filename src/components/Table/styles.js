import styled from 'styled-components'

export const TableStyled = styled.section`
    width: 100%;
    max-width: var(--desktop);
    padding: 1rem;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    > div {
        width: 130px;
        height: 130px;
        margin: 0.5rem 1rem;
    }

    background-image: url(${({ selected, bg }) => (selected ? '' : bg)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 70%;

    h4 {
        font-size: 16px;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        white-space: nowrap;
    }

    .playing {
        width: 100%;

        display: grid;
        grid-template-columns: 230px;
        grid-template-rows: 230px;
    }

    .playAgain {
        width: 100%;
        margin-top: 4rem;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: initial;

        h2 {
            width: 100%;
            margin-bottom: 2rem;

            color: #fff;
            font-size: 75px;
            font-weight: 600;
            text-align: center;
            text-transform: uppercase;

            text-shadow: -2px 5px 5px rgba(0, 0, 0, 0.75);
        }

        button {
            width: 70%;
        }
    }

    @media (min-width: 1366px) {
        max-width: 500px;
        background-size: 60%;
        > div:not(.playAgain) {
            /* width: 230px;
            height: 230px; */
            background-color: red;
            margin: 1.5rem 2.5rem;
        }
    }
`
