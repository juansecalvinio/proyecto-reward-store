import React, { Component } from 'react'
import { StyledLayout } from './styled';

import Hero from './Hero';
import Sorter from './Sorter';

class Layout extends Component {
    render() {
        return (
            <StyledLayout>
                <Hero />
                <Sorter />
            </StyledLayout>
        )    
    }    
}

export default Layout;
