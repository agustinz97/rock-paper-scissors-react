import styled from 'styled-components'

export const TableStyled = styled.section`
    margin-top: 4rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    background-image: url(${({ selected, bg }) => (selected ? '' : bg)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 70%;

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
`
