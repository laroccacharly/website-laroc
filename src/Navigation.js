import React  from 'react';
import styled from 'styled-components'

const List = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 10px;
    overflow: hidden;
`

const Item = styled.li`
    float: left;
`

const Link = styled.a`
    display: block;   
    color: var(--blue);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: medium;
    :hover {
      color: var(--light-blue) ;
    }
`


let Navigation = () => {
    return (
        [
            <List>
                <Item>
                    <Link href="/projects">
                        Projects
                    </Link>
                </Item>
                <Item>
                    <Link href="/articles">
                        Articles
                    </Link>
                </Item>
            </List>
        ]

    )
}

export default Navigation