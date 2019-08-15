import React from 'react';
import dayjs from 'dayjs';
import TimeAgo from 'react-timeago';

import { StyledContainer, StyledHeader, StyledHistory, StyledRow } from './styled';

const History = ({history}) => {
        const historyFilter = history.sort((a, b) => {
            if(dayjs(a.createDate) > dayjs(b.createDate)) return -1;
            if(dayjs(a.createDate) < dayjs(b.createDate)) return 1;
            return 0;
        });
        return (
            <StyledContainer>
                <StyledHeader>Your Purchases</StyledHeader>
                <StyledHistory>
                    {historyFilter.map(product => (
                        <StyledRow key={product.createDate}>
                            <span className="historyProduct">{product.name}</span>
                            <TimeAgo date={dayjs(product.createDate)} />
                        </StyledRow>
                    ))}
                </StyledHistory>                
            </StyledContainer>
        )
}

export default History;

