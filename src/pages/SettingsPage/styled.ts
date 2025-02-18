import styled, { css } from 'styled-components'

export const SettingsPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    box-sizing: border-box;
    ${({ theme }) => css`
        padding: ${theme.padding.m};
        width: ${theme.sizes.full};
        max-width: ${theme.sizes.max};
    `}
`
