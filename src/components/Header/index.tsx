import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import BurgerMenu from '@/components/BurgerMenu'
import { NAMES, PATHES } from '@/constants/textConstants'

import * as S from './styled'

export default function Header() {
    const [open, setOpen] = useState<boolean>(false)
    const activeLink = useLocation().pathname
    const nav = useNavigate()

    const handleNavigateOnClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
    ): void => {
        e.currentTarget.textContent === NAMES.home
            ? nav(PATHES.home)
            : nav(PATHES.settings)
    }

    return (
        <S.StyledHeader>
            <S.StyledHeaderText>
                <h1>Modsen Todo List</h1>
                <S.StyledLinks>
                    <S.StyledLink
                        $active={activeLink === PATHES.home}
                        onClick={handleNavigateOnClick}
                    >
                        {NAMES.home}
                    </S.StyledLink>
                    <S.StyledLink
                        $active={activeLink === PATHES.settings}
                        onClick={handleNavigateOnClick}
                    >
                        {NAMES.settings}
                    </S.StyledLink>
                </S.StyledLinks>
                <S.StyledBurgerMenu>
                    <BurgerMenu
                        open={open}
                        setOpen={setOpen}
                        active={activeLink}
                    />
                </S.StyledBurgerMenu>
            </S.StyledHeaderText>
        </S.StyledHeader>
    )
}
