import React from 'react'
import { useNavigate } from 'react-router-dom'

import { StyledLink } from '@/components/Header/styled'
import { PATHES } from '@/constants/textConstants'
import handleNavigate from '@/utils/handleNavigate'

import { BurgerMenuContainer, MenuContainer } from './styled'

interface BurgerMenuProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    active: string
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ open, setOpen, active }) => {
    const nav = useNavigate()

    const handleNavigateOnClick = (path: string): void => {
        setOpen(false)
        handleNavigate(path, nav)
    }

    const handleChangeOpenState = () => {
        setOpen((prevState) => !prevState)
    }

    return (
        <div>
            <BurgerMenuContainer open={open} onClick={handleChangeOpenState}>
                <div className="line line1" />
                <div className="line line2" />
                <div className="line line3" />
            </BurgerMenuContainer>
            {open && (
                <MenuContainer>
                    <StyledLink
                        $active={active === PATHES.home.path}
                        onClick={() => handleNavigateOnClick(PATHES.home.path)}
                    >
                        {PATHES.home.name}
                    </StyledLink>
                    <StyledLink
                        $active={active === PATHES.settings.path}
                        onClick={() =>
                            handleNavigateOnClick(PATHES.settings.path)
                        }
                    >
                        {PATHES.settings.name}
                    </StyledLink>
                </MenuContainer>
            )}
        </div>
    )
}

export default BurgerMenu
