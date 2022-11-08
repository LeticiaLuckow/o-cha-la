import styled from 'styled-components';

const PageSubTitles = styled.p`
  font-size: 32px;
  text-align: center;
  margin: 0;
  padding-top: 40px;
  font-family: uchen;
  display: flex;
`;

const InputCep = styled.input`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const ButtoCalculate = styled.button`
  margin: 10px;
  background: #739669fc;
  color: white;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #dadada;
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;
`;
export { PageSubTitles, InputCep, ButtoCalculate };
