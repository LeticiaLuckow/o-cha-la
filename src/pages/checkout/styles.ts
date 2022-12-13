import styled from 'styled-components';

const PageSubTitles = styled.p`
  font-size: 26px;
  text-align: center;
  margin: 0;
  padding: 30px;
  font-family: uchen;
  display: flex;
`;

const DivCheckout = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 22px 0 92px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const DivTable = styled.div`
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
`;

const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 300px;
  }
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

const ButtonCalculate = styled.button`
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
  DivCheckout,
  DivTable,
  DivForm,
  InputCep,
  ButtonCalculate,
  LabelInfo,
  InputAddress,
  ButtonCheckout,
};
