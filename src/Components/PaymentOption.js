import React from 'react';
import { FilterRow, Text } from './Styles/Styles'


const PaymentOption = props => {
  return (
    <FilterRow onClick={e => props.refineSearch('payment_options', props.card)}>
      <Text>{props.card === 'AMEX' ? 'American Express' : props.card}</Text>
    </FilterRow>
  )
}

export default PaymentOption;