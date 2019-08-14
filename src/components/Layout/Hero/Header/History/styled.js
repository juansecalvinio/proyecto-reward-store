import styled from 'styled-components';

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
    background: white;
    position: absolute;
    width: 80vw;
    max-width: 340px;
    z-index: 2;
    right: 0;
    top: 50px;
    height: 310px;
    overflow: scroll;
    padding: 1em;
    border-radius: 3px;
    box-shadow: -1px 2px 7px 0px #00000014;
`;
// TODO -- falta hacer la animacion

export const StyledHeader = styled.div`
    height: 3em;
    background: white;
    border-radius: 3px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    
    h3 {
      color: #D9D9D9;
      text-align: center;  
    }
`;

export const StyledHistory = styled.div`
    height: 100%;
    overflow: scroll;
    padding-top: 1.8em;
    color: #616161;
    font-size: 1em;
    text-align: right;
`;

export const StyledRow = styled.div`
    justify-content: space-between;
    padding: 0.3em 0;
`;

