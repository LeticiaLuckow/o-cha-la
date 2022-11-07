import styled from 'styled-components';

const BagP = styled.p`
  font-size: 32px;
  text-align: center;
  margin: 0;
  padding-top: 40px;
  font-family: uchen;
`;

const TableBag = styled.table`
  font-size: 18px;
  border: 1px solid transparent;
  width: 80%;
  border-collapse: collapse;
  box-sizing: border-box;
`;

const ThBag = styled.th`
  border: 1.5px solid transparent;
  color: #6d6d6d;
  padding: 8px;
`;

const TdBag = styled.td`
  border: 1px solid transparent;
  background: #fafafa;
  text-align: center;
`;

const CartP = styled.p`
  font-size: 32px;
  margin: 0;
  padding-top: 40px;
  font-family: uchen;
`;
const ThCart = styled.th`
  background: #ededed;
  color: #6d6d6d;
  padding: 16px;
`;

const TdCart = styled.th`
  background: #fafafa;
  font-weight: normal;
`;
const ButtonDelete = styled.button`
  border: none;
  background: transparent;
`;

const DivButton = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonCartBag = styled.button`
  margin: 10px;
  background: #739669fc;
  color: white;
  padding: 8px;
  font-size: 22px;
  border-radius: 4px;
  border: 1px solid #dadada;
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
`;

const ButtonBuy = styled.button`
  color: #739669fc;
  font-weight: bold;
  border: none;
  background: transparent;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  BagP,
  TableBag,
  ThBag,
  TdBag,
  CartP,
  ThCart,
  TdCart,
  ButtonCartBag,
  ButtonBuy,
  DivButton,
  ButtonDelete,
};
