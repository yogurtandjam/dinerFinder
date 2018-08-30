import React from 'react';
import { Row } from './Styles/Styles'


const PaymentOption = props => {
  return (
    <Row>
      {props.card}
    </Row>
  )
}

export default PaymentOption;