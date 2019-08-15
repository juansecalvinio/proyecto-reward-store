import styled, { keyframes } from 'styled-components';

const fadeInHistory = () => {
    const fadeIn = keyframes`
        0% {
            opacity: 0;
            transform: translateY(10px);
        }
        100% {
            opacity: 1;
            transform: translateY(0px);
        }
    `;
    return fadeIn;
}

export const StyledContainer = styled.div`
    animation: ${fadeInHistory} 0.3s;
    background: white;
    border-radius: 3px;
    box-shadow: -1px 2px 7px 0px #00000014;
    color: #616161;
    font-size: 1em;
    height: 310px;
    max-width: 480px;
    overflow: scroll;
    padding: 1em;
    position: absolute;
    text-align: right;
    top: 50px;
    width: 80vw;
    z-index: 2;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.3em 0;

    .historyProduct {
        flex: 2;
        text-align: left;
    }
    .historyDate {
        flex: 1;
        text-align: right;
    }

`;

