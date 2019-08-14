import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StyledContainer, StyledHeader, StyledHistory, StyledRow } from './styled';

class History extends Component {
    render() {
        return (
            <StyledContainer>
                <StyledHeader></StyledHeader>
                <StyledHistory>
                    <StyledRow></StyledRow>
                </StyledHistory>                
            </StyledContainer>
        )
    }
}

export default History;

