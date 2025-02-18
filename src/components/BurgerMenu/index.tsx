import React, { Dispatch, SetStateAction } from 'react'

import { useNavigate } from 'react-router-dom'

import * as S from './styled'

import { StyledLink } from '@/components/Header/styled'
import { PathesConstants } from '@/constants/pathesConstants'

interface BurgerMenuProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    activePath: string
}

export default function BurgerMenu({
    open,
    setOpen,
    activePath,
}: BurgerMenuProps) {
    const nav = useNavigate()

    const handleNavigateOnClick = (path: string) => () => {
        setOpen(false)
        nav(path)
    }

    const handleChangeOpenState = () => {
        setOpen((prevState) => !prevState)
    }

    return (
        <>
            <S.BurgerMenuContainer onClick={handleChangeOpenState}>
                <S.StyledBurgerLine open={open} />
                <S.StyledBurgerLine open={open} />
                <S.StyledBurgerLine open={open} />
            </S.BurgerMenuContainer>
            <S.MenuContainer open={open}>
                <StyledLink
                    $active={activePath === PathesConstants.home.path}
                    onClick={handleNavigateOnClick(PathesConstants.home.path)}
                >
                    {PathesConstants.home.name}
                </StyledLink>
                <StyledLink
                    $active={activePath === PathesConstants.settings.path}
                    onClick={handleNavigateOnClick(
                        PathesConstants.settings.path,
                    )}
                >
                    {PathesConstants.settings.name}
                </StyledLink>
            </S.MenuContainer>
        </>
    )
}
