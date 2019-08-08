import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getProductRequest } from '../store';

const StyledContainer = styled.div`
    display: flex;
    margin: 20px auto;
    max-width: 1000px;
    padding: 20px;
    text-align: center;
`;

// const StyledImage = styled.div``;

// const StyledData = styled.div``;

// const StyledButton  = styled.div``;


class ProductDetail extends Component {
    
    componentDidMount() {
        const { id } = this.props.match.params;
        const { getProduct } = this.props;
        getProduct(id);
    }
    
    render() {
        const { name } = this.props.product;
        console.log(this.props.product);
        return (
            <StyledContainer>
                {name}
            </StyledContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        product: state.product,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProduct: (id) => dispatch(getProductRequest(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductDetail);
