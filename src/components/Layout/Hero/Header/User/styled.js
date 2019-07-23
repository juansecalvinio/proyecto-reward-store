import styled, { keyframes } from 'styled-components';

// Creo la animación para girar la monedita
const flipCoin = () => {
    const rotation = keyframes`
        0% {
            transform: rotateY(0deg);
        }
        40% {
            transform: rotateY(2turn);
        }
        100% {
            transform: rotateY(2turn);
        }
    `;
    return rotation;
}


export const StyledUserInfoWrapper = styled.div`
    align-items: center;
    color: #616161;
    display: flex;
    font-size: 1em;
    letter-spacing: 2px;
    text-align: right;
`;

export const StyledUserName = styled.span`
    color: #FFFFFF;
    cursor: pointer;
    font-weight: 700;
    position: relative;
    -webkit-transition: all 3s;
    transition: all 3s;

    &:hover:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1.5px;
        background: #ffffff;
        bottom: -2px;
        left: 0;
    }
`;

export const StyledUserPoints = styled.div`
    align-items: center;
    background: rgb(204, 204, 204, 0.5);
    border-radius: 50px;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    font-weight: 700;
    justify-content: center;
    margin-left: 0.6em;
    padding: 0.4em 0.5em 0.4em 1em;

    img {
        animation: ${flipCoin} 15s infinite;
        animation-delay: 5s;
        margin-left: 4px;
    }
`;