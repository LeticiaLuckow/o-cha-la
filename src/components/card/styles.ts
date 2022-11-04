import styled from 'styled-components';

const CardDiv = styled.div`
  width: 300px;
  border: 1px solid #ededed;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: 42px;
  padding: 8px;
`;

const CardImage = styled.img`
  width: 100%;
`;

const NameProduct = styled.p`
  font-size: 18px;
  cursor: pointer;
`;

const FakePrice = styled.p`
  font-size: 12px;
  color: #828282;
  margin: 0;
  text-decoration: line-through;
`;

const Price = styled.p`
  font-size: 18px;
  margin: 0;
`;

const ButtonCard = styled.button`
  margin: 10px;
  background: #739669fc;
  color: white;
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #dadada;
`;

export { CardDiv, CardImage, NameProduct, FakePrice, Price, ButtonCard };
