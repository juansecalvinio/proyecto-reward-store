import styled from 'styled-components';

export const StyledProductWrapper = styled.div`
    background: #ffffff;    
    border-radius: 3px;
    box-shadow: -1px 2px 7px 0px #00000014;
    cursor: pointer;
    display: flex;
    margin: auto;
    margin-top: 0;
    padding: 1em;
    position: relative;
    transition: 0.3s ease box-shadow,0.3s ease transform;
    width: 100%;
`;

export const StyledProductImg = styled.div`
    align-items: center;
    border: none;
    border-bottom: 1px solid #D9D9D9;
    border-right: 1px solid #D9D9D9;
    display: flex;
    height: 190px;
    justify-content: center;
    width: 131px;

    img {
        height: 100%;
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