import React  from 'react';
import styled from 'styled-components'
import Card from './Card';
import json from "./projects"


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
            <Card {...json.projects[0]}/>
        </Content>

    )
}

export default Banner