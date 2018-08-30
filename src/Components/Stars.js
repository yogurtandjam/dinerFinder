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

const OnHalf = StarContainer.extend`
  background: url(${fullStar}) 0 0;
  background-size: 20px;
  background-repeat: no-repeat;
  width: 10px;
`

const OffHalf = OnHalf.extend`
  background: url(${emptyStar}) -10px 0;
  background-size: 20px;
  background-repeat: no-repeat;
  width: 10px;
`

const HalfContainer = styled.div`
  display: flex;
  flex-direction: row;
`


const Stars = props => {
  if (props.on === 'half') {
    return (
      <HalfContainer>
        <OnHalf/>
        <OffHalf/>
      </HalfContainer>
    )
  }
    return (
    <StarContainer on={props.on}/>
    )
}

export default Stars;