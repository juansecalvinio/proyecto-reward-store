import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';

import Container from './../components/Container';
import Card from './../components/Container/Card';

import { getProductsRequest } from './../store';

class Home extends Component {

    componentDidMount() {
        const { getProductsItems } = this.props;
        getProductsItems();
        console.log('Se montó Home');
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
=======
import { connect } from 'react-redux'

import Container from './../components/Container';

class Home extends Component {




    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Home;
>>>>>>> 74e6f896c26ddacd6fc42b852e610042df55602c
