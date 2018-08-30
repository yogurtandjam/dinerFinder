import React from 'react';
import Stars from './Stars';
import styled from 'styled-components';
import { FilterRow } from './Styles/Styles'

const StarRow = FilterRow.extend`
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