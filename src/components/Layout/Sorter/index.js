import React, { Component } from 'react';
import { connect } from 'react-redux';

import { activeHighest, activeLowest } from './../../../store';

import { 
    StyledSorterWrapper, 
    StyledSorterLabel, 
    StyledSorterCategories, 
    StyledSorterCategory 
} from './styled';

class Sorter extends Component {

    handleClickHighest = (event) => {
        event.preventDefault();
        const { activeHighest } = this.props;
        activeHighest();
    }

    handleClickLowest = (event) => {
        event.preventDefault();
        const { activeLowest } = this.props;
        activeLowest();
    }

    render() {
        const { highestActive, lowestActive } = this.props;
        return (
            <StyledSorterWrapper>
                <StyledSorterLabel>Sorted by:</StyledSorterLabel>
                <StyledSorterCategories>
                    <StyledSorterCategory className={highestActive ? "active" : ""} onClick={this.handleClickHighest}>Highest Price</StyledSorterCategory>
                    <StyledSorterCategory className={lowestActive ? "active" : ""} onClick={this.handleClickLowest}>Lowest Price</StyledSorterCategory>
                </StyledSorterCategories>
            </StyledSorterWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        highestActive: state.highestActive,
        lowestActive: state.lowestActive,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        activeHighest: () => dispatch(activeHighest()),
        activeLowest: () => dispatch(activeLowest()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sorter);
