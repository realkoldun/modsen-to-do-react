import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import BurgerMenu from '@/components/BurgerMenu'
import { PATHES } from '@/constants/textConstants'
import handleNavigate from '@/utils/handleNavigate'

import * as S from './styled'

export default function Header() {
    const [open, setOpen] = useState<boolean>(false)
    const activeLink = useLocation().pathname
    const nav = useNavigate()

    const handleNavigateOnClick = (path: string) => {
        handleNavigate(path, nav)
    }

    return (
        <S.StyledHeader>
            <S.StyledHeaderText>
                <h1>Modsen Todo List</h1>
                <S.StyledLinks>
                    <S.StyledLink
                        $active={activeLink === PATHES.home.path}
                        onClick={() => handleNavigateOnClick(PATHES.home.path)}
                    >
                        {PATHES.home.name}
                    </S.StyledLink>
                    <S.StyledLink
                        $active={activeLink === PATHES.settings.path}
                        onClick={() =>
                            handleNavigateOnClick(PATHES.settings.path)
                        }
                    >
                        {PATHES.settings.name}
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
