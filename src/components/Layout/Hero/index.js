import React from 'react';
import { StyledHeroWrapper, StyledHero, StyledHeroTitle } from './styled';
import Header from './Header';

const Hero = () => {
    return (
        <StyledHeroWrapper>
            <Header />
            <StyledHero>
                <StyledHeroTitle>Electrónica</StyledHeroTitle>
            </StyledHero>
        </StyledHeroWrapper>
    )
}

export default Hero;
