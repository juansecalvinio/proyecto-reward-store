import styled from 'styled-components';

export const StyledProductWrapper = styled.div`
    border: 1px solid #fff;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 3px 4px rgba(0,0,0,.1);
    cursor: pointer;    
    height: 100%;     
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    min-width: 200px;
    min-height: 200px;
    overflow: hidden;
    position: relative;
    transition: all .25s;
    text-align: left;

    hr {
        border: 0;
        border-top: 1px solid #e9ebf1;
        margin: 5px 0 10px 0;
    }

    &:hover {
        box-shadow: 0 0 20px rgba(21, 219, 255, .4);
    }

    &.selected {
        box-shadow: 0 0 40px rgba(1, 1, 1,.4);
        border: 0;
    }
`;

export const StyledProductContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
`;

export const StyledProductPoints = styled.div`
    align-items: center;
    background: rgba(21, 219, 255, 0.9);
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

export const OverlayWrapper = styled.div`
    align-items: center;
    background-color: rgba(21, 219, 255, .9);
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    opacity: 1;
    position: absolute;
    perspective: 500px;
    transition: all .25s;
    width: 100%;
    z-index: 3;
    pointer-events: all;

    .enabled {
        background-color: rgba(21, 219, 255, 0.9);
    }

    .selected {
        opacity: 1;
        pointer-events: all;
    }
`;

export const OverlayClose = styled.div`
    transition: all .25s;
    position: absolute;
    right: 15px;
    top: 13.5px;
    width: 15px;
    height: 15px;
    opacity: .8;
`;

export const OverlayBalance = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    width: 100%;
`;

export const OverlayBalanceContent = styled.div`
    align-items: center;
    color: #fff;
    display: flex;
    font-weight: 600;
    font-size: 24px;
    flex-direction: column;
    justify-content: center;
    width: 100px;

    hr {
        border-top: 1px solid #fff;
        margin: 5px 0;
        width: 100%;
    }

    div {
        align-items: center;
        display: flex;
    }
`;

export const OverlayButton = styled.div`
    align-items: center;
    background-color: #fff;
    border-radius: 100px;
    color: rgba(21, 219, 255, 0.9);
    cursor: pointer;
    display: flex;
    font-size: 20px;    
    font-weight: 500;
    justify-content: center;
    margin: 5px;
    padding: 5px 12px;
    transition: all .25s;
    text-align: center;
    user-select: none;
    transition: all .25s;

    &:hover {
        background-color: #eee;
    }
`;