import styled, { css } from 'styled-components'

export const SettingsPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    ${({ theme }) => css`
        width: ${theme.sizes.full};
        max-width: ${theme.sizes.max};
    `}
`
