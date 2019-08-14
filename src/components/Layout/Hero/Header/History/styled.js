import styled, { keyframes } from 'styled-components';

const purchaseHistory = () => {
    const fade = keyframes`
        0% {
            opacity: 0;
            transform: translateY(10px);
        }
        100% {
            opactiy: 1;
            transform: translateY(0px);
        }
    `;
}

export const StyledContainer = styled.div`
    animation: ${purchaseHistory} 0.3s;
    background: white;
    border-radius: 3px;
    box-shadow: -1px 2px 7px 0px #00000014;
    color: #616161;
    font-size: 1em;
    height: 310px;
    max-width: 340px;
    overflow: scroll;
    padding: 1em;
    position: absolute;
    right: 0;
    text-align: right;
    top: 50px;
    width: 80vw;
    z-index: 1;
`;

export const StyledHeader = styled.div`
    align-items: center;
    background: white;
    border-radius: 3px;
    display: flex;
    height: 3em;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    
    h3 {
      color: #D9D9D9;
      text-align: center;  
    }
`;

export const StyledHistory = styled.div`
    color: #616161;
    font-size: 1em;
    height: 100%;
    overflow: scroll;
    padding-top: 1.8em;
    text-align: right;
`;

export const StyledRow = styled.div`
    justify-content: space-between;
    padding: 0.3em 0;
`;

