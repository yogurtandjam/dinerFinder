import React from 'react';
import styled from 'styled-components';
import RatingRow from './RatingRow';
import { FilterContainer, FilterRow } from './Styles/Styles';

const StarRow = FilterRow.extend`
  :hover {
    background-color: white;
  }
`

const Rating = props => {
  return (
    <FilterContainer >
      <h3>Rating</h3>
        <StarRow  onMouseLeave={props.dimStars}>
          {props.highlightedStars.map((on, i) => <RatingRow
            key={i}
            on={on}
            index={i}
            highlightStars={props.highlightStars}
            selectStars={props.selectStars}/>)}
        </StarRow>
    </FilterContainer>
  )
}



export default Rating;