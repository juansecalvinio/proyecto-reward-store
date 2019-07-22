import React, { Component } from 'react';

import { 
    StyledProductCategory, 
    StyledProductImg, 
    StyledProductText,
    StyledProductCategory,
    StyledProductName
} from './styled';


class Product extends Component {
    render() {
        const { product } = this.props;
        return (
            <StyledProductCategory>
                <StyledProductImg>
                    <img src={product.img.url} alt={product.name} />>
                </StyledProductImg>
                <StyledProductText>
                    <StyledProductCategory>{product.category}</StyledProductCategory>
                    <StyledProductName>{product.name}</StyledProductName>
                </StyledProductText>
            </StyledProductCategory>
        )
    }
}

export default Product;
