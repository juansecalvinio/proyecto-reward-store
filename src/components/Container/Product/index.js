import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import coin from '../../../img/icons/coin.svg';
import close from '../../../img/icons/close.svg';

import { connect } from 'react-redux';
import { selectProduct, deselectProduct } from './../../../store';

import { 
    StyledProductWrapper, 
    StyledProductImg,
    StyledProductText,
    StyledProductCategory,
    StyledProductName,
    StyledProductPoints,
    SpanPoints,
    DivImgCoin,
    OverlayWrapper,
    OverlayClose,
    OverlayBalance,
    OverlayBalanceContent,
    OverlayRedeemButton,
} from './styled';

import { StyledCoin } from './../../Layout/Hero/Header/User/styled'

class Product extends Component {
    
    state = {
        selected: false,
    }

    handleProductClick = (event) => {
        const { selected } = this.state;
        // Verifico que el click sea dentro del componente
        if(this.node.contains(event.currentTarget)) {
            if(selected === true) {
                this.setState({ selected: false });
            } else if(selected === false) {
                this.setState({ selected: true });
            }
            return;
        }
        console.log('Fuera del click');
        this.setState({ selected: false });
    }

    handleCloseClick = (event) => {
        this.setState({ selected: false })
    }

    render() {
        const { data, user } = this.props;
        const { selected } = this.state;
        return (
            <StyledProductWrapper ref={ node => this.node = node } className={selected ? "selected" : ""} onClick={this.handleProductClick}>
                {selected && 
                    <OverlayWrapper>
                        <OverlayClose onClick={this.handleCloseClick}>
                            <img scr={close} alt='close' />
                        </OverlayClose>
                        <OverlayBalance>
                            <OverlayBalanceContent>
                                <span className="current">{user.points}</span>
                                <span className="cost">{`- ${data.cost}`}</span>
                                <hr/>
                                <div className="final">
                                    <span>{(user.points - data.cost)}</span>
                                    <StyledCoin />
                                </div>
                            </OverlayBalanceContent>
                        </OverlayBalance>
                    </OverlayWrapper>
                }
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
