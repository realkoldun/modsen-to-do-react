import styled from 'styled-components'

interface BurgerMenuContainerProps {
    open: boolean
}

export const BurgerMenuContainer = styled.div<BurgerMenuContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 20;

    .line {
        width: 2rem;
        height: 0.25rem;
        background: ${({ theme }) => theme.colors.white};
        border-radius: ${({ theme }) => theme.sizes.xs};
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
    }
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: normal;
    font-size: ${({ theme }) => theme.font.m};
    padding-top: ${({ theme }) => theme.padding.m};
    background-color: ${({ theme }) => theme.colors.indigo};
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transform: translateY(-100%);
    transition: transform 0.5s ease-in-out;
    z-index: 10;

    &.open {
        transform: translateY(0);
    }

    a {
        color: ${({ theme }) => theme.colors.white};
        padding: ${({ theme }) => theme.padding.s};
    }
`
