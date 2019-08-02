import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getProductRequest } from '../store';

const StyledContainer = styled.div`
    display: flex;
    padding: 20px;
    text-align: center;
`;

const StyledImage = styled.div``;

class ProductDetail extends Component {
    
    componentDidMount() {
        const { id } = this.props.match.params;
        const { getProduct } = this.props;
        getProduct(id);
    }
    
    render() {
        const { img, name } = this.props.product;
        console.log(this.props.product);
        return (
            <StyledContainer>
                <StyledImage>
                    {img.hdUrl}
                    {name}
                    {/* <img src={img.hdUrl} alt={name} /> */}
                </StyledImage>
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
