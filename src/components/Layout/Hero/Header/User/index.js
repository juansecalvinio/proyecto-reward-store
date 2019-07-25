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

import { getUserRequest } from './../../../../../store';

class User extends Component {

    componentDidMount() {
        console.log('Se montó User');
        const { getUser } = this.props;
        getUser();
    }

    render() {
        const { user, loading } = this.props;
        return (
            <StyledUserInfoWrapper>
                <StyledUserName>{user.name}</StyledUserName>
                <StyledUserPoints>
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
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps,
)(User);
