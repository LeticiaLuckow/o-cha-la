import styled from 'styled-components';

const InputTypeNumber = styled.input`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  border: 1px solid #dadada;
`;

const ButtonPayment = styled.button`
  margin: 28px 0 14px 0;
  background: #739669fc;
  color: white;
  padding: 8px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export { InputTypeNumber, ButtonPayment };
