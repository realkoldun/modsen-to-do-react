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
    z-index: 10;

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
    align-items: flex-end;
    justify-items: center;
    background-color: ${({ theme }) => theme.colors.indigo};
    position: absolute;
    top: 4rem;
    right: 1rem;
    border-radius: ${({ theme }) => theme.sizes.xs};
    box-shadow: 0 0 ${({ theme }) => theme.sizes.xs}
        ${({ theme }) => theme.colors.darkGray};
    padding: ${({ theme }) => theme.padding.s};

    a {
        color: ${({ theme }) => theme.colors.white};
        padding: ${({ theme }) => theme.padding.s};
`
