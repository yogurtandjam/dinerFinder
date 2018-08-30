import React from 'react';
import styled from 'styled-components';
import RatingRow from './RatingRow';
import { FilterContainer } from './Styles/Styles';

const starMap = [
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1]
]

const Rating = props => {
  return (
    <FilterContainer >
      <h3>Rating</h3>
        {starMap.map((stars, i) => <RatingRow key={i} stars={stars} starCount={i} refineSearch={props.refineSearch}/>)}
    </FilterContainer>
  )
}



export default Rating;