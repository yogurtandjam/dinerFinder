import React from 'react';
import Stars from './Stars';
import styled from 'styled-components';
import { Row } from './Styles/Styles'

const StarRow = Row.extend`
display: flex;
flex-direction: row;
`

const RatingRow = props => {
  return (
    <StarRow>
      {props.stars.map((star, i) => <Stars key={i} on={star}/>)}
    </StarRow>
  )
}

export default RatingRow;