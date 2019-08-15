import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import History from './History';

import { 
    StyledUserInfoWrapper, 
    StyledUserName, 
    StyledUserPoints,
    StyledCoin
} from './styled';

import coin from './../../../../../img/icons/coin.svg';

import { getUserRequest, addPointsRequest, getHistoryRequest } from './../../../../../store';

class User extends Component {

    state = {
        showHistory: false,
    }

    componentDidMount() {
        const { getUser } = this.props;
        getUser();
    }

    handleClickPoints = () => {
        const { user, addPoints } = this.props;
        addPoints(user.points);
    }

    handleClickUser = () => {
        const { getHistory } = this.props;
        const { showHistory } = this.state;
        getHistory();
        !showHistory ? this.setState({ showHistory: true }) : this.setState({ showHistory: false });
    }

    render() {
        const { history, user, loading } = this.props;
        const { showHistory } = this.state;
        return (
            <StyledUserInfoWrapper>
                <StyledUserName onClick={this.handleClickUser}>{user.name}</StyledUserName>
                <StyledUserPoints onClick={this.handleClickPoints}>
                    {loading && <Loader type="ThreeDots" color="#ffffff" height={30} width={30} />}
                    {!loading && user.points}
                    <StyledCoin src={coin} alt="coin" />
                </StyledUserPoints>
                {showHistory && <History history={history} />}
            </StyledUserInfoWrapper>            
        )
    }    
}

const mapStateToProps = state => {
    return {
        user: state.user,
        loading: state.loading,
        history: state.history,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getUserRequest()),
        addPoints: value => dispatch(addPointsRequest(value)),
        getHistory: () => dispatch(getHistoryRequest()),
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps,
)(User);
