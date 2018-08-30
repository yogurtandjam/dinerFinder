import React from 'react';
import styled from 'styled-components';
import { Row } from './Styles/Styles';
import Stars from './Stars';

const Thumbnail = styled.img`
  height: 120px;
  width: 125px;
  border-radius: 3px;
  cursor: pointer;
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
  display:flex;
  color: gray;
  margin-bottom: 10px;
  flex-direction: row;
`

const Rating = styled.div`
  margin: 0;
  color: orange;
  display:flex;
  flex-direction: row;
`
const NumStars = styled.text`
  margin-right: 5px;
`

const Details = styled.div`
  color: gray;
  flex-direction: row;
`

const Name = styled.h3`
  margin-top: 0;
  margin-bottom: .5em;
  cursor: pointer;
`

const Result = props => {
  const starRow = [];
  let starCount = props.restaurant['stars_count'];
  for (let i = 0; i < 5; i++) {
    console.log(starCount)
    let isOn = starCount -= 1;
    if (isOn === 1 || isOn <= 0) starRow.push(false)
    else if (isOn > 1) starRow.push(true)
    else if (isOn > 0 ) starRow.push('half')
  }
  console.log(starRow)
  return (
    <ResultContainer>
      <div>
      <Thumbnail onClick={e => props.makeReservation(props.restaurant['reserve_url'])} src={props.restaurant.image_url}/>
      </div>
      <RestaurantInfo>
        <Name onClick={e => props.makeReservation(props.restaurant['reserve_url'])}>{props.restaurant.name}</Name>
        <Reviews>
          <Rating>
            <NumStars>{props.restaurant['stars_count']}</NumStars>
            {starRow.map((fill, i) => <Stars key={i} on={fill}/>)}
          </Rating>
          <span>({props.restaurant['reviews_count']} Reviews)</span>
        </Reviews>
        <Details>{props.restaurant['food_type']}| {props.restaurant.area} | {props.restaurant.price_range}</Details>
      </RestaurantInfo>
    </ResultContainer>
  )
}

export default Result;