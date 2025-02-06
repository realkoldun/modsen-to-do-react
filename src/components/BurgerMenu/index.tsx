import React from 'react'
import { useNavigate } from 'react-router-dom'

import { StyledLink } from '@/components/Header/styled'
import { NAMES, PATHES } from '@/constants/textConstants'

import { BurgerMenuContainer, MenuContainer } from './styled'

interface BurgerMenuProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    active: string
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ open, setOpen, active }) => {
    const nav = useNavigate()

    const handleNavigateOnClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
    ): void => {
        setOpen(false)
        e.currentTarget.textContent === NAMES.home
            ? nav(PATHES.home)
            : nav(PATHES.settings)
    }

    return (
        <div>
            <BurgerMenuContainer open={open} onClick={() => setOpen(!open)}>
                <div className="line line1" />
                <div className="line line2" />
                <div className="line line3" />
            </BurgerMenuContainer>
            {open && (
                <MenuContainer>
                    <StyledLink
                        $active={active === PATHES.home}
                        onClick={handleNavigateOnClick}
                    >
                        {NAMES.home}
                    </StyledLink>
                    <StyledLink
                        $active={active === PATHES.settings}
                        onClick={handleNavigateOnClick}
                    >
                        {NAMES.settings}
                    </StyledLink>
                </MenuContainer>
            )}
        </div>
    )
}

export default BurgerMenu
