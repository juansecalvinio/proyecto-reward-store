import React, { Component } from 'react'
import { StyledContainer } from './styled';

import Product from './Product';

class Container extends Component {

    componentDidMount() {
        console.log(this.props);
    }   
    
    render() {
        const { data, loading, error } = this.props;
        return (
            <StyledContainer>
                {loading && data.length === 0 && Array.from({ length: 10 }, (_, index) => <Product data="" key={index} />)}
                {error && <p>Ocurrió un error con la carga de datos: {error}</p>}
                {data.length > 0 && data.map(product => <Product data={product} key={product._id} />)}
            </StyledContainer>
        )
    }
}

export default Container;
