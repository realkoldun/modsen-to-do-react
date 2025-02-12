import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import * as S from './styled'
import BurgerMenu from '@/components/BurgerMenu'
import { PathesConstants } from '@/constants/pathesConstants'

export default function Header() {
    const [open, setOpen] = useState<boolean>(false)
    const activeLink = useLocation().pathname
    const nav = useNavigate()

    const handleNavigateOnClick = (path: string) => () => nav(path)

    return (
        <S.StyledHeader>
            <S.StyledHeaderTextContainer>
                <h1>Modsen Todo List</h1>
                <S.StyledLinksContainer>
                    <S.StyledLink
                        $active={activeLink === PathesConstants.home.path}
                        onClick={handleNavigateOnClick(
                            PathesConstants.home.path,
                        )}
                    >
                        {PathesConstants.home.name}
                    </S.StyledLink>
                    <S.StyledLink
                        $active={activeLink === PathesConstants.settings.path}
                        onClick={handleNavigateOnClick(
                            PathesConstants.settings.path,
                        )}
                    >
                        {PathesConstants.settings.name}
                    </S.StyledLink>
                </S.StyledLinksContainer>
                <S.StyledBurgerMenu>
                    <BurgerMenu
                        open={open}
                        setOpen={setOpen}
                        activePath={activeLink}
                    />
                </S.StyledBurgerMenu>
            </S.StyledHeaderTextContainer>
        </S.StyledHeader>
    )
}
