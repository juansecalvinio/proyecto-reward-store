import React from 'react'
import { StyledContainer } from './styled';

import Product from './Product';

const Container = ({ data }) => {
    return (
        <StyledContainer>
            {data.map(product => <Product data={product} key={product._id}></Product> )}
        </StyledContainer>
    )
}

export default Container;
