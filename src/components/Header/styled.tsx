import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    width: ${({ theme }) => theme.sizes.full};
    background-color: ${({ theme }) => theme.colors.indigo};
    padding: ${({ theme }) => theme.padding.s} ${({ theme }) => theme.padding.l};
    box-sizing: border-box;
    font-size: ${({ theme }) => theme.font.m};
    @media only screen and (min-width: ${({ theme }) =>
            theme.screenWidth.wide}) {
        font-size: ${({ theme }) => theme.font.xxxl};
    }
    @media only screen and (max-width: ${({ theme }) =>
            theme.screenWidth.small}) {
        font-size: ${({ theme }) => theme.font.xs};
    }
    @media only screen and (max-width: ${({ theme }) =>
            theme.screenWidth.mobile}) {
        font-size: ${({ theme }) => theme.font.xxs};
    }
`

export const StyledHeaderText = styled.div`
    width: ${({ theme }) => theme.sizes.full};
    max-width: ${({ theme }) => theme.sizes.max};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    max-height: ${({ theme }) => theme.sizes.l};
    box-sizing: border-box;
`

export const StyledLinks = styled.nav`
    display: flex;
    align-items: center;

    @media only screen and (max-width: 460px) {
        display: none;
    }
`

export const StyledLink = styled.a<{ $active: boolean }>`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    margin-left: ${({ theme }) => theme.margin.l};
    cursor: pointer;

    ${({ $active }) =>
        $active &&
        `
    text-decoration: underline;
  `}
`

export const StyledBurgerMenu = styled.div`
    display: none;

    @media only screen and (max-width: ${({ theme }) =>
            theme.screenWidth.mobile}) {
        display: flex;
    }
`
