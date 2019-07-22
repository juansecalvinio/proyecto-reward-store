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
                {loading && <p>Cargando...</p>}
                {error && <p>Ocurrió un error con la carga de datos: {error}</p>}
                {data.length > 0 && data.map(product => <Product data={product} key={product._id}></Product>)}
            </StyledContainer>
        )
    }    
}

export default Container;
