import styled from 'styled-components';

const FilterContainer = styled.div`
  text-align:left;
`

const Row = styled.div`
  margin-left: 20px;
`

const FilterRow = Row.extend`
  padding: 3px;
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  :hover{
    background-color:#2FA0D1 !important;
    border-radius: 3px;
    cursor: pointer;
    color: white;
  }
`
const Text = styled.p`
  margin: 0px;
  font-size: 15px;
`

export {
  FilterContainer,
  FilterRow,
  Row,
  Text
}