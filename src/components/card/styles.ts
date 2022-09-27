import styled from 'styled-components';

const CardDiv = styled.div`
  width: 300px;
  border: 1px solid #ededed;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin: 42px;
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
  background: #203b3f;
  color: white;
  padding: 4px;
`;

export { CardDiv, CardImage, NameProduct, FakePrice, Price, ButtonCard };
