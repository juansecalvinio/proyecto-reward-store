import React, { Component } from 'react';
import { connect } from 'react-redux'

import Container from './../../components/Container';
import { getProductsRequest } from './../../store';

class Products extends Component {

    componentDidMount() {
        const { getProductItems, highestActive, lowestActive } = this.props;
        if(!highestActive && !lowestActive) getProductItems();
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
        highestActive: state.highestActive,
        lowestActive: state.lowestActive,
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