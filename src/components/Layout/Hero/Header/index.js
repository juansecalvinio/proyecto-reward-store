import React from 'react';
import { StyledHeader } from './styled';
import User from './User';

const Header = () => {
    return (
        <StyledHeader>
            <User name="Juanse Calviño" points="3459" />
        </StyledHeader>
    )
}

export default Header;

