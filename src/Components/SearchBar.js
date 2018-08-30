import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  background-color: #186389;
  height: 60px;
  padding: 25px 35px 10px 25px;
`

const SearchInput = styled.input`
  padding-left: 10px;
  height: 40px;
  border: none;
  width: 100%;
  border-radius: 3px;
  box-shadow: 2px 2px 2px 0px rgba(0,0,0,.2) inset;
`

const SearchBar = props => {
  return (
    <SearchContainer>
        <SearchInput
          type="text"
          id="search"
          placeholder="Search by Restaurant Name, Cuisine, Location"
          value={props.searchValue}
          onChange={props.handleChange}/> 
    </SearchContainer>
  )
}

export default SearchBar;