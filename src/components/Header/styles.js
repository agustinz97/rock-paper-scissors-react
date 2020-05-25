import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;
    max-width: var(--desktop);
    padding: 0.5rem 1rem;
    margin: 0 auto;

    border: 3px solid var(--headerOutline);
    border-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        margin-left: 1rem;

        font-size: 21px;
        font-weight: 600;
        color: #fff;
        line-height: 18px;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
`
