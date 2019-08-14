import React, { Component } from 'react';
import { connect } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import { StyledCoin } from './../../components/Layout/Hero/Header/User/styled';
import coin from './../../img/icons/coin.svg';
import Loader from 'react-loader-spinner';

import { 
    StyledContainer, 
    StyledWrapper, 
    StyledImage, 
    StyledInfo, 
    StyledButton,
    StyledPoints
} from './../ProductDetail/styled';

import { getProductRequest, redeemProductRequest } from './../../store';

class ProductDetail extends Component {
    
    componentDidMount() {
        const { id } = this.props.match.params;
        const { getProduct } = this.props;
        getProduct(id);
    }

    objectNonEmpty = (obj) => {
        return Object.getOwnPropertyNames(obj).length >= 1;
    }

    handleRedeemClick = () => {
        const { id } = this.props.match.params;
        const { redeemProduct } = this.props;
        redeemProduct(id);
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
                        <StyledButton onClick={this.handleRedeemClick}>
                            <button>
                                {(loading && <Loader type="ThreeDots" color="#ffffff" height={30} width={30} />) || 'Redeem'}  
                                <StyledCoin src={coin} alt="coin" />
                            </button>                            
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
        redeem: state.product,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProduct: (id) => dispatch(getProductRequest(id)),
        redeemProduct: (id) => dispatch(redeemProductRequest(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProductDetail);
