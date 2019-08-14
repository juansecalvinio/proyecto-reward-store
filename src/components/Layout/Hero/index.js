import React from 'react';
import { StyledHeroWrapper, StyledHero, StyledHeroTitle } from './styled';
import { Link } from 'react-router-dom';
import Header from './Header';

const Hero = () => {
    return (
        <StyledHeroWrapper>
            <Header />
            <StyledHero>
                <StyledHeroTitle><Link style={{textDecoration: 'none'}} to="/">Electrónica</Link></StyledHeroTitle>
            </StyledHero>
        </StyledHeroWrapper>
    )
}

export default Hero;
