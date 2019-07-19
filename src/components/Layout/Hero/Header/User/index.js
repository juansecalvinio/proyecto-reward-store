import React from 'react';
import { StyledUserInfoWrapper, StyledUserName, StyledUserPoints } from './styled';
import coin from './../../../../../img/icons/coin.svg';

const User = ({ name, points }) => {
    return (
        <StyledUserInfoWrapper>
            <StyledUserName>{name}</StyledUserName>
            <StyledUserPoints>
                {points}
                <img src={coin} alt="coin" />
            </StyledUserPoints>
        </StyledUserInfoWrapper>
    )
}

export default User;
