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
        const { product } = this.props;
        return (
            <StyledProductWrapper>
                <StyledProductImg>
                    <img src={product.img.url} alt={product.name} />>
                </StyledProductImg>
                <StyledProductText>
                    <StyledProductCategory>{product.category}</StyledProductCategory>
                    <StyledProductName>{product.name}</StyledProductName>
                </StyledProductText>
            </StyledProductWrapper>
        )
    }
}

export default Product;
