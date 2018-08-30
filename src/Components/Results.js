import React from 'react';
import styled from 'styled-components';
import Result from './Result';

const ResultsContainer = styled.div`
  display:flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  padding: 20px;
`

const Timer = styled.div`
  text-align: left;
`

const Next = styled.button`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: white;
  padding: 10px;
  border:solid #E3E3E3 1px;
  border-radius: 3px;
  cursor: pointer;
`

const Results = props => {
  if (props.restaurants.length > 0) {
    return (
      <ResultsContainer>
        <Timer>
          {props.restaurantCount} results found in {props.queryTime} seconds
        </Timer>
        {props.restaurants.map((restaurant, i) => <Result key={i} restaurant={restaurant}/>)}
        {props.pageNumber === (props.maxPages - 1) ? <Next onClick={props.startOver}>Start Over</Next> : <Next onClick={props.nextPage}>Show More</Next>}
      </ResultsContainer>
    )
  } else {
    return (
      <ResultsContainer>
        {props.searchValue.length === 0 ? 'Start your Search!' : 'Sorry, no results were found for your query!'}
      </ResultsContainer>
    )
  }
}

export default Results;