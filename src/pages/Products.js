import React, { Component } from 'react';
import { connect } from 'react-redux'

import Container from '../components/Container';
import { getProductsRequest } from '../store';

class Products extends Component {

    componentDidMount() {
        console.log('Se montó Products');
        const { getProductItems } = this.props;
        getProductItems();        
    }

    render() {
        const { productItems, loading, error } = this.props;

        return (
            <Container data={productItems} loading={loading} error={error} />            
        )
    }
}

const mapStateToProps = state => {
    return {
        productItems: state.products,
        loading: state.loading,
        error: state.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProductItems: () => dispatch(getProductsRequest()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Products);
