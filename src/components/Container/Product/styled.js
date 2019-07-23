import styled from 'styled-components';

export const StyledProductWrapper = styled.div`
    border: 1px solid #fff;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 3px 4px rgba(0,0,0,.1);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between; 
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    min-width: 200px;
    min-height: 200px;
    overflow: hidden;
    padding: 10px;
    position: relative;
    transition: all .25s;
    text-align: left;

    hr {
        border: 0;
        border-top: 1px solid #e9ebf1;
        margin: 5px 0 10px 0;
    }
`;

export const StyledProductPoints = styled.div`
    align-items: center;
    background: rgb(21, 219, 255, 0.4);
    border: 1px solid rgba(21, 219, 255, 0.2);
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-weight: 600;
    justify-content: center;
    padding: 5px 12px;
    position: absolute;
    right: 10px;
    text-align: center;
    transition: all .25s;
    user-select: none;
`;

export const SpanPoints = styled.span`
    color: #fff;
`;

export const DivImgCoin = styled.div`
    height: 18px;
    margin-top: -2px;
    margin-right: -4px;
    margin-left: 2.5px;
    margin-bottom: -4px;
    perspective: 500px;
    width: 18px;
    z-index: 1;

    img { 
        height: 18px;
        width: 18px;
    }
`;

export const StyledProductImg = styled.div`
    height: 100%;
    object-fit: cover;
    width: 100%;
`;

export const StyledProductText = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-top: 1em;
    text-align: left;
    width: 100%;
`;

export const StyledProductCategory = styled.span`
    color: #a3a3a3;
    margin-bottom: 0.1em; 
`;

export const StyledProductName = styled.span`
    color: #616161;
    font-size: 1.2em;
`;