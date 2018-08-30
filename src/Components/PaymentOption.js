import React from 'react';
import { FilterRow, Text } from './Styles/Styles'

const PaymentText = Text.extend`
  pointer-events: none;
`

const PaymentOption = props => {
  return (
    <FilterRow onClick={e => {
      props.toggleBackground(e)
      props.refineSearch('payment_options', props.card)}}>
      <PaymentText>{props.card === 'AMEX' ? 'American Express' : props.card}</PaymentText>
    </FilterRow>
  )
}

export default PaymentOption;