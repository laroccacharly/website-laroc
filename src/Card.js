import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const Main = styled.div`
  background-image: linear-gradient(${props => props.gradient_color_1}, ${props => props.gradient_color_2});
`

const CardBackground = styled.div`
  width: 50%;
  height: 80%;
  background: var(--white);
`

const Image = styled.img`

`

let ImgMediaCard = ({image_name, gradient_color_1, gradient_color_2, title, tags, published_date})  => {


    return (
        <Main gradient_color_1={gradient_color_1} gradient_color_2={gradient_color_2}>
            <h1>{title}</h1>
            <CardBackground>
                <img src="/public/project_images/mnist.jpeg"/>
            </CardBackground>

            <h2>{tags}</h2>
            <p>{published_date}</p>
        </Main>

    );
}

ImgMediaCard.propTypes = {
    image_name: PropTypes.string,
    gradient_color_1: PropTypes.string,
    gradient_color_2: PropTypes.string,
    title: PropTypes.string,
    tags: PropTypes.array,
    published_date: PropTypes.string
};

// API of a card

// Image size unknown 600 x 800 :
// https://www.pexels.com
// https://unsplash.com
// https://blog.snappa.com/free-stock-photos/
// Gradient (two colors)
// Title
// Tags ( images of techs )
// Published date

export default ImgMediaCard;