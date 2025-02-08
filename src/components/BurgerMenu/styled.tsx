import styled, { css } from 'styled-components'

interface BurgerMenuContainerProps {
    open: boolean
}

export const BurgerMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 32px;
    height: 32px;
    background: transparent;
    border: none;
    cursor: pointer;
    position: fixed;
    top: 1.5rem;
    right: 1rem;
    z-index: 20;
`

export const StyledBurgerLine = styled.div<BurgerMenuContainerProps>`
    width: 2rem;
    height: 0.25rem;
    ${({ theme }) => css`
        background: ${theme.headerFontColor};
        border-radius: ${theme.sizes.xs};
    `}
    transition: all 0.5s ease-in-out;

    &:first-child {
        transform-origin: 0 0;
        ${({ open }) => open && 'transform: rotate(45deg);'}
    }

    &:nth-child(2) {
        transition: transform 0.5s ease-in-out;
        ${({ open }) => open && 'opacity: 0;'}
    }

    &:nth-child(3) {
        transform-origin: 0 ${({ theme }) => theme.sizes.full};
        ${({ open }) => open && 'transform: rotate(-45deg);'}
    }
`
export const MenuContainer = styled.div<BurgerMenuContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: normal;
    ${({ theme }) => css`
        font-size: ${theme.font.m};
        padding-top: ${theme.padding.m};
        background-color: ${theme.headerBackground};
    `}
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    transform: translateY(-100%);
    transition: all 0.5s ease-in-out;
    ${({ open }) => open && 'transform: translateY(0);'}
`
