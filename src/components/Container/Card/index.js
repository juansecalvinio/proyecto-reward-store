import React, { Component } from 'react';
import coin from './../../../img/icons/coin.svg';

import {
    StyledCardWrapper,
    StyledCardInner,
    StyledCardPointsWrapper,
    StyledCardPoints, 
    StyledCardCoin,
    StyledCardImage,
    StyledCardInfoWrapper,
    StyledCardInfoCategory,
    StyledCardInfoName
} from './styled';

class Card extends Component {

    componentDidMount() {
        console.log('Se montó Card.');
    }

    render() {
        const { _id, name, cost, category, img } = this.props.product;
        return (
            <StyledCardWrapper key={_id}>
                <StyledCardInner>
                    <StyledCardPointsWrapper>
                        <StyledCardPoints>{cost}</StyledCardPoints>
                        <StyledCardCoin src={coin} alt="coin" />
                    </StyledCardPointsWrapper>
                    <StyledCardImage src={img.url} />
                    <StyledCardInfoWrapper>
                        <StyledCardInfoCategory>{category}</StyledCardInfoCategory>
                        <StyledCardInfoName>{name}</StyledCardInfoName>
                    </StyledCardInfoWrapper>
                </StyledCardInner>
            </StyledCardWrapper>
        )
    }
}

export default Card;
