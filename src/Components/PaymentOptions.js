import React from 'react';
import styled from 'styled-components';
import { FilterContainer } from './Styles/Styles';
import PaymentOption from './PaymentOption';



const PaymentOptions = props => {
  return (
    <FilterContainer>
      <h3>Payment Options</h3>
      {['AMEX', 'Visa', 'Discover', 'MasterCard'].map((card, i) => <PaymentOption
        card={card}
        key={i}
        refineSearch={props.refineSearch}
        toggleBackground={props.toggleBackground}/>)}
    </FilterContainer>
  )
}



export default PaymentOptions;