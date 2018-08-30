import React from 'react';
import styled from 'styled-components';
import { Row } from './Styles/Styles';

const Thumbnail = styled.img`
  height: 120px;
  width: 125px;
  border-radius: 3px;
`

const ResultContainer = Row.extend`
  text-align: left;
  display: flex;
  flex-direction: row;
  padding: 20px;
`

const RestaurantInfo = Row.extend`
`
const Reviews = styled.div`
  color: gray;
  margin-bottom: 10px;
  flex-direction: row;
`

const Rating = styled.span`
  margin: 0;
  color: orange;
  flex-direction: row;
`

const Details = styled.div`
  color: gray;
  flex-direction: row;
`

const Name = styled.h3`
  margin-top: 0;
`

const Result = props => {
  return (
    <ResultContainer>
      <div>
      <Thumbnail src={props.restaurant.image_url}/>
      </div>
      <RestaurantInfo>
        <Name>{props.restaurant.name}</Name>
        <Reviews>
          <Rating>{props.restaurant['stars_count']}</Rating><span>({props.restaurant['reviews_count']} Reviews)</span>
        </Reviews>
        <Details>{props.restaurant['food_type']}| {props.restaurant.area} | {props.restaurant.price_range}</Details>
      </RestaurantInfo>
    </ResultContainer>
  )
}

export default Result;