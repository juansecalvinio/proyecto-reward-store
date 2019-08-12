import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import { StyledCoin } from './../components/Layout/Hero/Header/User/styled';
import coin from './../img/icons/coin.svg';
import Loader from 'react-loader-spinner';

import { getProductRequest } from '../store';

const StyledContainer = styled.div`
    margin: 20px auto;
    max-width: 1000px;
    padding: 20px;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
`;

const StyledImage = styled.div`
    flex: 1;
`;

const StyledInfo = styled.div`
    background: #fafafa;
    border: 1px solid rgba(21, 219, 255, 0.9);
    box-shadow: 0 3px 4px rgba(0,0,0,.1);
    flex: 2;

    h2 {
        font-weight: 100;
        letter-spacing: -2px;
    }
`;

const StyledPoints = styled.div`
    
`;

const StyledButton = styled.div`
    text-align: center;
    width: 100%;

    button {
        align-items: center;
        background-color: #fafafa;
        border: 1px solid rgba(21, 219, 255, 0.9);
        border-radius: 50px;
        box-shadow: 0 3px 4px rgba(0,0,0,.1);
        color: rgba(21, 219, 255, 0.9);
        cursor: pointer;
        display: flex;
        font-size: 18px;
        font-weight: 100;
        justify-content: center;
        justify-items: stretch;
        letter-spacing: 1px;
        margin: 20px auto;
        padding: 0.4em 0.5em 0.4em 1em;
        transition: all .25s;
        text-align: center;
        user-select: none;

        &:hover {
            background-color: rgba(21, 219, 255, 0.9);
            color: #fafafa;
        }
    }
`;

class ProductDetail extends Component {
    
    componentDidMount() {
        const { id } = this.props.match.params;
        const { getProduct } = this.props;
        getProduct(id);
    }

    objectNonEmpty = (obj) => {
        return Object.getOwnPropertyNames(obj).length >= 1;
    }
    
    render() {
        const { loading, product } = this.props;
        return (
            <StyledContainer>
                {(this.objectNonEmpty(product) && 
                <StyledWrapper>
                    <StyledImage>
                        {this.objectNonEmpty(product) && <img src={product.img.url} alt={product.name} />}
                    </StyledImage>
                    <StyledInfo>
                        <StyledPoints>
                            <h2>{product.name}</h2>
                            <span></span>
                        </StyledPoints>
                        <StyledButton>
                            {loading && <Loader type="ThreeDots" color="#ffffff" height={18} width={18} />}
                            <button>Redeem <StyledCoin src={coin} alt="coin" /></button>                            
                        </StyledButton>
                    </StyledInfo>
                </StyledWrapper>) || <Skeleton />}
            </StyledContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
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
