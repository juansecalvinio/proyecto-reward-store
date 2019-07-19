import styled from 'styled-components';

export const StyledContainer = styled.span`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
    grid-gap: 20px;
    transition: all 1s;
`;