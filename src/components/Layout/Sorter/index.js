import React from 'react'
import { 
    StyledSorterWrapper, 
    StyledSorterLabel, 
    StyledSorterCategories, 
    StyledSorterCategory 
} from './styled';

const Sorter = () => {
    return (
        <StyledSorterWrapper>
            <StyledSorterLabel>Sorted by:</StyledSorterLabel>
            <StyledSorterCategories>
                <StyledSorterCategory>Highest Price</StyledSorterCategory>
                <StyledSorterCategory>Lowest Price</StyledSorterCategory>
            </StyledSorterCategories>
        </StyledSorterWrapper>
    )
}

export default Sorter;
