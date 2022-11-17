import styled from 'styled-components';

const PageSubTitles = styled.p`
  font-size: 26px;
  text-align: center;
  margin: 0;
  padding: 30px;
  font-family: uchen;
  display: flex;
`;

const InputCep = styled.input`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  padding: 6px;
  border: 1px solid #dadada;
`;

const LabelInfo = styled.label`
  margin-top: 10px;
  font-family: poppins;
`;

const InputAddress = styled.input`
  padding: 6px;
  border: 1px solid #dadada;
`;

const ButtoCalculate = styled.button`
  margin: 10px;
  background: #739669fc;
  color: white;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #dadada;
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;

  &:disabled {
    background: grey;
    cursor: default;
  }
`;

const ButtonCheckout = styled.button`
  margin: 10px;
  background: #739669fc;
  color: white;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #dadada;
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;

  &:disabled {
    background: grey;
    cursor: default;
  }
`;

export {
  PageSubTitles,
  InputCep,
  ButtoCalculate,
  LabelInfo,
  InputAddress,
  ButtonCheckout,
};
