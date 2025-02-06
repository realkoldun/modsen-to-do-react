import React from 'react'

import SEARCH_ICON from '@/assets/icons/search.png'

import {
    StyledDisplay,
    StyledLabel,
    StyledLegend,
    StyledSearchButton,
    StyledSection,
} from './styled'

export default function GitHubSearch() {
    return (
        <>
            <StyledSection>
                <StyledLabel>
                    <StyledLegend>GitHub info</StyledLegend>
                    <StyledDisplay placeholder="Search name..."></StyledDisplay>
                </StyledLabel>
                <StyledSearchButton type="button">
                    <img src={SEARCH_ICON} alt="search" />
                </StyledSearchButton>
            </StyledSection>
        </>
    )
}
