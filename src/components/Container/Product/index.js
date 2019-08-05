import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import coin from '../../../img/icons/coin.svg';

import { connect } from 'react-redux';
import { Link }  from 'react-router-dom';

import {
    StyledProductWrapper,
    StyledProductContent,
    StyledProductImg,
    StyledProductText,
    StyledProductCategory,
    StyledProductName,
    StyledProductPoints,
    SpanPoints,
    DivImgCoin,
    OverlayWrapper,
    OverlayBalance,
    OverlayBalanceContent,
    OverlayButton,
} from './styled';

import { StyledCoin } from './../../Layout/Hero/Header/User/styled'

class Product extends Component {
    
    state = {
        selected: false,
    }

    // Manejo el click dentro del componente
    handleProductClick = () => {
        if(this.state.selected === false) {
            document.addEventListener('click', this.handleOutClick, false);
        } else {
            document.removeEventListener('click', this.handleOutClick, false);
        }

        this.setState(prevState => ({
            selected: !prevState.selected,
        }));
    }

    // Manejo un click de otro componente para cambiar el estado de este
    handleOutClick = (event) => {
        if(this.node.contains(event.target)) {
            return;
        }

        this.handleProductClick();
    }

    handleRedeemClick = (event) => {
        console.log('Redeem now')
    }

    render() {
        const { data, user } = this.props;
        const { selected } = this.state;
        return (
            <StyledProductWrapper ref={ node => { this.node = node; } } 
            className={ selected ? "selected" : "" }
            onClick={this.handleProductClick}>
                {selected && <OverlayWrapper>
                                <OverlayBalance>
                                    <OverlayBalanceContent>
                                        <span className="current">{user.points}</span>
                                        <span className="cost">{`- ${data.cost}`}</span>
                                        <hr/>
                                        <div className="final">
                                            <span>{(user.points - data.cost)}</span>
                                            <StyledCoin src={coin} alt="coin" />
                                        </div>
                                    </OverlayBalanceContent>
                                </OverlayBalance>
                                <OverlayButton onClick={this.handleRedeemClick}>Redeem Now</OverlayButton>
                                <Link style={{textDecoration: 'none'}} to={`/product/${data._id}`}><OverlayButton>Details</OverlayButton></Link>
                            </OverlayWrapper> }
                <StyledProductContent>
                    {(data.cost &&
                    <StyledProductPoints>
                        <SpanPoints>{data.cost}</SpanPoints>
                        <DivImgCoin>
                            <img src={coin} alt={data.name} />
                        </DivImgCoin>
                    </StyledProductPoints>) || <Skeleton />}             
                    <StyledProductImg>
                        {(data.img && <img src={data.img.url} alt={data.name} />) || <Skeleton />}   
                    </StyledProductImg>
                    <hr/>
                    <StyledProductText>
                        <StyledProductCategory>{data.category || <Skeleton />}</StyledProductCategory>
                        <StyledProductName>{data.name || <Skeleton />}</StyledProductName>
                    </StyledProductText>
                </StyledProductContent>
            </StyledProductWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

export default connect(
    mapStateToProps,
)(Product);
