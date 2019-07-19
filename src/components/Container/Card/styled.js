import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
    background-color: #fff;
    border: 1px solid #fff;
    border-radius: 3px;
    box-shadow: 0 3px 4px rgba(0,0,0,.1);
    cursor: pointer;
    height: 100%;
    min-width: 200px;
    min-height: 200px;
    position: relative;
    transition: all .25s;
    width: 100%;
`;

export const StyledCardInner = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    hr {
        border: 0;
        border-top: 1px solid #e9ebf1;
        margin: 0;
        margin-top: 5px;
        margin-bottom: 10px;
    }
`;

export const StyledCardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;  
`;

export const StyledCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCardInfoCategory = styled.span`
    color: #a3a3a3;
`;

export const StyledCardInfoName = styled.span`
    color: #111111;    
    font-weight: 600;
`;

export const StyledCardPointsWrapper = styled.div`
    align-items: center;
    border: 1px solid rgba(255,110,5,.2);
    border-radius: 100px;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    justify-content: center;
    padding: 5px 12px;
    position: absolute;
    right: 10px;
    text-align: center;
    transition: all .25s;
    user-select: none;
`;

export const StyledCardPoints = styled.span`
    font-weight: 600;
`;

export const StyledCardCoin = styled.div`
    height: 18px;
    margin: -2px -4px -4px 2.5px;
    perspective: 500px;
    width: 18px;
    z-index: 1;

    img {
        height: 18px;
        width: 18px;
    }
`;