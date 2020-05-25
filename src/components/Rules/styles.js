import styled from 'styled-components'

export const RulesStyled = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    background-color: #fff;
    transition: all ease 0.2s;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};
    h2 {
        text-transform: uppercase;
        color: var(--headerOutline);
        font-size: 30px;
    }

    .closeIcon {
        width: 20px;
        height: 20px;
    }

    @media (min-width: 1366px) {
        width: 500px;
        min-height: 65%;
        height: auto;
        padding: 2rem;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        justify-content: flex-end;

        border-radius: 3%;

        h2 {
            position: absolute;
            top: 2rem;
            left: 2rem;

            transform: translateY(-50%);
        }

        .closeIcon {
            position: absolute;
            top: 2.2rem;
            right: 2rem;

            transform: translateY(-50%);

            cursor: pointer;
        }
    }
`
