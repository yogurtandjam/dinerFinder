import React from 'react';
import styled from 'styled-components';
import emptyStar from '../resources/graphics/star-empty.png';
import fullStar from '../resources/graphics/stars-plain.png';

const StarContainer = styled.div`
  background: ${props => props.on ? `url(${fullStar})` : `url(${emptyStar})`};
  background-color: transparent;
  background-size: 20px;
  width: 20px;
  height: 20px;
`


const Stars = props => {
    return (
    <StarContainer on={props.on} onMouseEnter={()=>props.highlightStars(props.index)} onClick={props.selectStars}/>
    )
}

export default Stars;