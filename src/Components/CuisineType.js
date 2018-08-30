import React from 'react';
import styled from 'styled-components';
import { FilterContainer } from './Styles/Styles';
import Cuisine from './Cuisine';


const Header = styled.h3`
  margin-top: 0;
`

const CuisineType = props => {
  return (
    <FilterContainer>
      <Header>Cuisine/Food Type</Header>
      {props.foodTypes ? Object.keys(props.foodTypes).map((cuisine, i) => <Cuisine
        cuisine={cuisine}
        key={i}
        refineSearch={props.refineSearch}
        hits={props.foodTypes[cuisine]}/>)
        : null}
    </FilterContainer>
  )
}

export default CuisineType;