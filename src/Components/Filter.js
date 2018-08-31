import React from 'react';
import styled from 'styled-components';
import CuisineType from './CuisineType';
import Rating from './Rating';
import PaymentOptions from './PaymentOptions';

const FilterContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 300px;
  border-right: solid #E3E3E3 .1px;
  padding: 25px;
  overflow-y: auto;
`

const Filter = props => {
  return (
    <FilterContainer>
      <CuisineType refineSearch={props.refineSearch} foodTypes={props.foodTypes}/>
      <Rating
        starMap={props.starMap}
        refineSearch={props.refineSearch}
        highlightStars={props.highlightStars}
        highlightedStars={props.highlightedStars}
        dimStars={props.dimStars}
        selectStars={props.selectStars}/>
      <PaymentOptions refineSearch={props.refineSearch} toggleBackground={props.toggleBackground}/>
    </FilterContainer>
  )
}

export default Filter;