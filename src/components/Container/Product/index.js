import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
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
                {(data.cost &&
                <StyledProductPoints>
                    <SpanPoints>{data.cost}</SpanPoints>
                    <DivImgCoin>
                        <img src={coin} alt={data.name} />
                    </DivImgCoin>
                </StyledProductPoints>) || <Skeleton />}             
                <StyledProductImg>
                    {(data.img && <img src={data.img.url} alt={data.name} />) || <Skeleton />}   
                </StyledProductImg>
                <hr/>
                <StyledProductText>
                    <StyledProductCategory>{data.category || <Skeleton />}</StyledProductCategory>
                    <StyledProductName>{data.name || <Skeleton />}</StyledProductName>
                </StyledProductText>
            </StyledProductWrapper>
        )
    }
}

export default Product;
