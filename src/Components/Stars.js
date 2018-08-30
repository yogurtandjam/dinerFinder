import React from 'react';
import styled from 'styled-components';
import emptyStar from '../resources/graphics/star-empty.png';
import fullStar from '../resources/graphics/stars-plain.png';


// background: url(${emptyStar});
const StarContainer = styled.div`
  width: 15px;
  height: 15px;
  margin-bottom: 7px;
`

const OnStar = styled.img.attrs({
  src: fullStar
})`
  width:100%;
  height:100%;
`

const OffStar = styled.img.attrs({
  src: emptyStar
})`
  width:100%;
  height:100%;
`

const Stars = props => {
  if (props.on) {
    return (
    <StarContainer>
      <OnStar/>
    </StarContainer>
    )
 } else {
    return (
    <StarContainer>
      <OffStar/>
    </StarContainer>
    )
  }
}

export default Stars;