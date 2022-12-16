import styled from 'styled-components';

const DivLogin = styled.div`
  display: flex;
  flex-direction: column;
  padding: 34px;
  border: 1px solid;
  border-radius 8px;
  border-color: #DADADA;
`;

const InputLogin = styled.input`
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 6%);
  border: 1px solid;
  border-radius: 4px;
  border-color: #dadada;
  color: #363636;
  height: 28px;
  padding-left: 8px;
  margin-top: 8px;
`;

const DivLink = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  margin-top: 4px;
  text-decoration: underline;
`;

const ButtonReturn = styled.button`
  display: flex;
  margin: 12px;
  color: #51674bfc;
  font-weight: bold;
  border: none;
  background: transparent;
  font-size: 14px;
`;
const ButtonLogin = styled.button`
  margin-top: 8px;
  border: 1px solid #dadada;
  background: #739669fc;
  border-radius: 4px;
  color: white;
  padding: 8px;
  margin-top: 16px;
  cursor: pointer;
`;

export { DivLogin, ButtonLogin, InputLogin, DivLink, ButtonReturn };
