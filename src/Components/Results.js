import React from 'react';
import styled from 'styled-components';
import Result from './Result';
import fullStar from '../resources/graphics/stars-plain.png';
import { StarContainer } from './Styles/Styles';

const ResultsContainer = styled.div`
  display:flex;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  padding: 20px;
`

const Timer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
`

const Line = styled.div`
  margin: 20px;
  width: 50%;
  border-bottom: solid #E3E3E3 1px;
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
  font-size: 15px;
  color: gray;
  `

const Results = props => {
  if (props.restaurants.length > 0) {
    return (
      <ResultsContainer>
        <Timer>
          {props.restaurantCount} results found in {props.queryTime} seconds
          <Line/>
        </Timer>
        {props.restaurants.map((restaurant, i) => <Result key={i} restaurant={restaurant} makeReservation={props.makeReservation}/>)}
        {props.pageNumber === (props.maxPages - 1) ? <Next onClick={props.startOver}>Start Over</Next> : <Next onClick={props.nextPage}>Show More</Next>}
      </ResultsContainer>
    )
  } else {
    return (
      <ResultsContainer>
        {props.firstSearch ? 'Start your Search!' : 'Sorry, no results were found for your query!'}
      </ResultsContainer>
    )
  }
}

export default Results;