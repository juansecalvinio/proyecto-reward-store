import React from 'react';
import { StyledHeader } from './styled';
import User from './User';
import History from './History';

const Header = () => {
    return (
        <StyledHeader>
            <User />
            <History />
        </StyledHeader>
    )
}

export default Header;

