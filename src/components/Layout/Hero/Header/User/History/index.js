import React from 'react';

import { StyledContainer, StyledHeader, StyledHistory, StyledRow } from './styled';

const History = ({history}) => {
        console.log(history);
        return (
            <StyledContainer>
                <StyledHeader>Your Purchases</StyledHeader>
                <StyledHistory>
                    {history.map(product => (
                        <StyledRow key={product.createDate}>
                            <span className="historyProduct">{product.name}</span>
                            <span className="historyDate">{product.createDate}</span>    
                        </StyledRow>
                    ))}
                </StyledHistory>                
            </StyledContainer>
        )
}

export default History;

