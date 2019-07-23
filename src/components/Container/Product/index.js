import React, { Component } from 'react';
import coin from '../../../img/icons/coin.svg';

import { 
    StyledProductWrapper, 
    StyledProductImg,
    StyledProductText,
    StyledProductCategory,
    StyledProductName,
    StyledProductPoints,
    SpanPoints,
    DivImgCoin,
} from './styled';


class Product extends Component {
    render() {
        const { data } = this.props;
        return (
            <StyledProductWrapper>
                <StyledProductPoints>
                    <SpanPoints>{data.cost}</SpanPoints>
                    <DivImgCoin>
                        <img src={coin} alt="coin" />
                    </DivImgCoin>
                </StyledProductPoints>
                <StyledProductImg>
                    <img src={data.img.url} alt={data.name} />
                </StyledProductImg>
                <hr/>
                <StyledProductText>
                    <StyledProductCategory>{data.category}</StyledProductCategory>
                    <StyledProductName>{data.name}</StyledProductName>
                </StyledProductText>
            </StyledProductWrapper>
        )
    }
}

export default Product;
