import React, { Component } from 'react';
import Navigation from './Navigation';
import Introduction from './Introduction';
import Banner from './Banner';

import styled from 'styled-components'

const MainSection = styled.section`
    height: 40vh;
    min-height: 500px;
    display: flex;
    background-image: linear-gradient(to bottom right, var(--blue) , var(--light-blue));

`

const Root = styled.div`
    // Main colors
    --light-blue: #839DAE;
    --blue: #728195;
    --redish: #82838C;
    --green-brown: #9E9F9A;
    --high-blue: #589AB4;
    --dark-blue: #3E465C;
    --white: #DAE1DE;

`


class App extends Component {
  render() {
    return (
      <Root>
        <Navigation/>
        <MainSection>
            <Introduction/>
            <Banner/>
        </MainSection>
      </Root>
    );
  }
}

export default App;
