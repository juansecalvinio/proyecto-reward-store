import React, { Component } from 'react';
import { connect } from 'react-redux';

import { activeHighest, activeLowest, activeAll, sorterProductsHighest, sorterProductsLowest, getProductsRequest } from './../../../store';

import { StyledSorterWrapper, StyledSorterLabel, StyledSorterCategories, StyledSorterCategory } from './styled';

class Sorter extends Component {

    handleClickAll = (event) => {
        event.preventDefault();
        const { activeAll, getAll } = this.props;
        activeAll();
        getAll();
    }

    handleClickHighest = (event) => {
        event.preventDefault();
        const { activeHighest, products, getSorteredHighest } = this.props;
        activeHighest();
        getSorteredHighest(products);
    }

    handleClickLowest = (event) => {
        event.preventDefault();
        const { activeLowest, products, getSorteredLowest } = this.props;
        activeLowest();
        getSorteredLowest(products);
    }

    render() {
        const { highestActive, lowestActive, allActive } = this.props;
        return (
            <StyledSorterWrapper>
                <StyledSorterLabel>Sorted by:</StyledSorterLabel>
                <StyledSorterCategories>
                    <StyledSorterCategory className={allActive ? "active" : ""} onClick={this.handleClickAll}>Show All</StyledSorterCategory>
                    <StyledSorterCategory className={highestActive ? "active" : ""} onClick={this.handleClickHighest}>Highest Price</StyledSorterCategory>
                    <StyledSorterCategory className={lowestActive ? "active" : ""} onClick={this.handleClickLowest}>Lowest Price</StyledSorterCategory>
                </StyledSorterCategories>
            </StyledSorterWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        highestActive: state.highestActive,
        lowestActive: state.lowestActive,
        allActive: state.allActive,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        activeHighest: () => dispatch(activeHighest()),
        activeLowest: () => dispatch(activeLowest()),
        activeAll: () => dispatch(activeAll()),
        getSorteredHighest: (products) => dispatch(sorterProductsHighest(products)),
        getSorteredLowest: (products) => dispatch(sorterProductsLowest(products)),
        getAll: () => dispatch(getProductsRequest()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sorter);
