import styled from 'styled-components';

export const StyledSorterWrapper = styled.div`
    border-bottom: 1px solid lightgray;
    display: inline-flex;
    height: 1em;
    margin: 2em auto;
    margin-bottom: 1em;
    padding-bottom: 2em;
    width: calc(100% - 10vw);
`;

export const StyledSorterLabel = styled.span`
    color: #777777;
    margin-right: 0.5em;
    white-space: nowrap;
`;

export const StyledSorterCategories = styled.div`
    white-space: nowrap;

    & span:not(:last-child) {
        margin-right: 1em;
    }
`;

export const StyledSorterCategory = styled.span`
    border-radius: 1em;
    background: #EDEDED;
    color: #777777;
    cursor: pointer;
    padding: 0.5em;
    transition: 0.2s ease all;

    &.active {
        background: #0AD4FA;
        color: #ffffff;
    }
`;