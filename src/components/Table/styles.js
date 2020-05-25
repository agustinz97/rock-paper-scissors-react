import styled from 'styled-components'

export const TableStyled = styled.section`
    width: 100%;
    max-width: var(--desktop);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    > div {
        width: 100px;
        height: 100px;
        margin: 8% 8%;
    }

    background-image: url(${({ selected, bg }) => (selected ? '' : bg)});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 70%;

    h4 {
        margin-top: 1rem;

        font-size: 16px;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        white-space: nowrap;
    }

    .playing {
        width: 100%;

        background: transparent;

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

    @media (min-width: 768px) {
        max-width: ${props => (props.isPlaying ? '1100px' : '600px')};
        > div:not(.playAgain) {
            width: ${props => (props.isPlaying ? '230px' : '180px')};
            height: ${props => (props.isPlaying ? '230px' : '180px')};

            > div {
                border-width: 30px;
            }
        }

        .playAgain {
            margin-top: 20%;
        }
    }

    @media (min-width: 1366px) {
        max-width: ${props => (props.isPlaying ? '1100px' : '500px')};

        justify-content: ${props =>
            props.isPlaying
                ? props.result
                    ? 'space-between'
                    : 'space-around'
                : 'center'};

        background-size: 60%;
        > div:not(.playAgain) {
            width: ${props => (props.isPlaying ? '230px' : '130px')};
            height: ${props => (props.isPlaying ? '230px' : '130px')};
            margin: 1.5rem 2.5rem;
            position: relative;
        }

        h4 {
            position: absolute;
            top: -30%;
            left: 0;
            right: 0;

            font-size: 1.2em;
        }

        position: relative;

        .playAgain {
            width: 40%;
            margin: 0;

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
`
