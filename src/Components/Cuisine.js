import React from 'react';
import { FilterRow } from './Styles/Styles';
import styled from 'styled-components';

const CuisineRow = FilterRow.extend`
  justify-content: space-between;
`

const Text = styled.p`
  margin: 0px;
  font-size: 15px;
`

const Cuisine = props => {
  return (
    <CuisineRow onClick={e => props.refineSearch('food_type', props.cuisine)}>
      <Text>{props.cuisine}</Text>
      <Text>{props.hits}</Text>
    </CuisineRow>
  )
}

export default Cuisine;