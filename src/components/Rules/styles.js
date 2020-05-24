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
`
