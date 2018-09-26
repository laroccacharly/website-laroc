import React  from 'react';
import styled from 'styled-components'

const Main = styled.div`
    width: 40%;
`

const Content = styled.div`
    max-width: 50rem;
    text-align: center;
`

const Header  = styled.h1`
    margin-top: 0px;
    padding-top: 1em;
    font-size: 3rem;
    color: var(--dark-blue);
`

const Body  = styled.h2`
    font-size: 1rem;
    color: var(--white);
    
`


let Introduction = () => {
    return (
        <Main>
            <Content>
                <Header>
                    LaRocca
                </Header>
                <Body>
                  Making Learning Simple
                </Body>
            </Content>
        </Main>

    )
}

export default Introduction