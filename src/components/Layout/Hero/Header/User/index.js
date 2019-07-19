import React from 'react';
import { StyledUserInfoWrapper, StyledUserName, StyledUserPoints } from './styled';
import coin from './../../../../../img/icons/coin.svg';

const User = () => {
    return (
        <StyledUserInfoWrapper>
            <StyledUserName>Juanse Calviño</StyledUserName>
            <StyledUserPoints>
                3549
                <img src={coin}></img>    
            </StyledUserPoints>
        </StyledUserInfoWrapper>
    )
}

export default User;
