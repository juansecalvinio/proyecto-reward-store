import styled from 'styled-components';
import banner from './../../../img/header-x1.png';

export const StyledHeroWrapper = styled.div`
    background: url(${banner}) 75% center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
`;

export const StyledHero = styled.div`
    align-items: flex-end;   
    display: flex;
    height: 40vh;
    justify-content: flex-start;
    margin: 0 2em;
    width: 100%;
`;

export const StyledHeroTitle = styled.div`
    color: #FFFFFF;
    font-size: 4em;
    font-weight: bold;
    letter-spacing: -4px;
    line-height: 1em;
    margin: 0.5em 0;
    padding: 10px;
`;