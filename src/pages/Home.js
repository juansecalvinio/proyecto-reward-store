import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from './../components/Container';
import Card from './../components/Container/Card';

import { getProductsRequest } from './../store';

class Home extends Component {

    componentDidMount() {
        const { getProductsItems } = this.props;
        getProductsItems();
    }


    render() {
        const { productsItems, loading, error } = this.props;
        return (
            <Container>
                {loading && <p>Loading...</p>}
                {error && <p>Ocurrió un error con la carga de productos => {error}</p>}
                {productsItems.length > 0 && productsItems.map((product) => (
                    <Card product={product} key={product._id} />
                ))}
            </Container>                 
        )
    }
}

const mapStateToProps = state => {
    return {
        productsItems: state.products,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProductsItems: () => dispatch(getProductsRequest()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
