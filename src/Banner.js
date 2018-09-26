import React  from 'react';
import styled from 'styled-components'
import Card from './Card';


const Content = styled.div`
    transition: transform .3s; /* Animation */

    :hover {
       transform: scale(1.07);
    }
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;

    height: 100%;

`


let Banner = () => {
    return (
        <Content>
            <Card/>
        </Content>

    )
}

export default Banner