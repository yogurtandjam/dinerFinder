import React from 'react';
import styled from 'styled-components';
import { FilterContainer } from './Styles/Styles';
import PaymentOption from './PaymentOption';



const PaymentOptions = props => {
  return (
    <FilterContainer>
      <h3>Payment Options</h3>
      {['American Express', 'Visa', 'Discover', 'MasterCard'].map((card, i) => <PaymentOption card={card} key={i}/>)}
    </FilterContainer>
  )
}



export default PaymentOptions;