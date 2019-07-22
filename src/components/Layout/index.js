import React from 'react'
import { StyledLayout } from './styled';

import Hero from './Hero';
import Sorter from './Sorter';

const Layout = () => {
    return (
        <StyledLayout>
            <Hero />
            <Sorter />
        </StyledLayout>
    )
}

export default Layout;
