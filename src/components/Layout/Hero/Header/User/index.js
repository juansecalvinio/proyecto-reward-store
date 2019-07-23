import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
    StyledUserInfoWrapper, 
    StyledUserName, 
    StyledUserPoints 
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
        const { user } = this.props;
        return (
            <StyledUserInfoWrapper>
                <StyledUserName>{user.name}</StyledUserName>
                <StyledUserPoints>
                    {user.points}
                    <img src={coin} alt="coin" />
                </StyledUserPoints>                
            </StyledUserInfoWrapper>
        )
    }    
}

const mapStateToProps = state => {
    return {
        user: state.user,
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
