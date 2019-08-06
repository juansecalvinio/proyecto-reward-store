import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { 
    StyledUserInfoWrapper, 
    StyledUserName, 
    StyledUserPoints,
    StyledCoin
} from './styled';

import coin from './../../../../../img/icons/coin.svg';

import { getUserRequest, addPointsRequest } from './../../../../../store';

class User extends Component {

    componentDidMount() {
        const { getUser } = this.props;
        getUser();
    }

    componentDidUpdate(prevProps) {
        const { user, getUser } = this.props;
        console.log(prevProps);
    }

    handleClickPoints = () => {
        const { user, addPoints, getUser } = this.props;
        addPoints(user.points);
        getUser();
    }

    render() {
        const { user, loading } = this.props;
        return (
            <StyledUserInfoWrapper>
                <StyledUserName>{user.name}</StyledUserName>
                <StyledUserPoints onClick={this.handleClickPoints}>
                    {loading && <Loader type="ThreeDots" color="#ffffff" height={18} width={18} />}
                    {user.points}
                    <StyledCoin src={coin} alt="coin" />
                </StyledUserPoints>
            </StyledUserInfoWrapper>
        )
    }    
}

const mapStateToProps = state => {
    return {
        user: state.user,
        loading: state.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getUserRequest()),
        addPoints: value => dispatch(addPointsRequest(value)),
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps,
)(User);
