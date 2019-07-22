import styled from 'styled-components';

export const StyledProductWrapper = styled.div`
    background: #ffffff;    
    border-radius: 3px;
    box-shadow: -1px 2px 7px 0px #00000014;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    overflow: hidden;
    padding: 1em;
    text-align: left;
    transition: 0.3s ease box-shadow,0.3s ease transform;
`;

export const StyledProductImg = styled.div`
    align-items: center;
    border: none;
    display: flex;
    height: 190px;
    justify-content: center;
    width: 131px;

    img {
        height: 100%;
        margin: 0 auto;
        min-height: 80px;
        object-fit: contain;
        width: 100%;
    }
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