import React, { Component } from 'react';

import { 
    StyledProductWrapper, 
    StyledProductImg, 
    StyledProductText,
    StyledProductCategory,
    StyledProductName
} from './styled';


class Product extends Component {
    render() {
        const { data } = this.props;
        return (
            <StyledProductWrapper>
                <StyledProductImg>
                    <img src={data.img.url} alt={data.name} />
                </StyledProductImg>
                <StyledProductText>
                    <StyledProductCategory>{data.category}</StyledProductCategory>
                    <StyledProductName>{data.name}</StyledProductName>
                </StyledProductText>
            </StyledProductWrapper>
        )
    }
}

export default Product;
