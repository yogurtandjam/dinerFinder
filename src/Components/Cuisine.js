import React from 'react';
import { FilterRow, Text } from './Styles/Styles';
import styled from 'styled-components';

const CuisineRow = FilterRow.extend`
  justify-content: space-between;
`
const HitCount = Text.extend`
  margin: 0px;
  font-size: 15px;
  color: gray;
`

const Cuisine = props => {
  return (
    <CuisineRow onClick={e => props.refineSearch('food_type', props.cuisine)}>
      <Text>{props.cuisine}</Text>
      <HitCount>{props.hits}</HitCount>
    </CuisineRow>
  )
}

export default Cuisine;