import React from 'react';
import { Row } from './Styles/Styles';
import styled from 'styled-components';

const CuisineRow = Row.extend`
  padding: 3p x;
  :hover {
    background-color:#2FA0D1;
    border-radius: 3px;
    cursor: pointer;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Text = styled.p`
  margin: 0px;
  font-size: 14px;
`

const Cuisine = props => {
  return (
    <CuisineRow onClick={e => props.refineSearch(props.cuisine)}>
      <Text>{props.cuisine}</Text>
      <Text>{props.hits}</Text>
    </CuisineRow>
  )
}

export default Cuisine;