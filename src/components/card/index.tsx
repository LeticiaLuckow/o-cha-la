import {
  ButtonCard,
  CardDiv,
  CardImage,
  FakePrice,
  NameProduct,
  Price,
} from './styles';

const Card = () => {
  return (
    <>
      <CardDiv>
        <CardImage src="https://www.vortexmag.net/wp-content/uploads/2020/11/pic.jpg" />
        <NameProduct>Chá de Camomila</NameProduct>
        <FakePrice>R$ 32,00</FakePrice>
        <Price>R$ 26,00</Price>
        <ButtonCard>Adicionar ao carrinho</ButtonCard>
      </CardDiv>
    </>
  );
};

export default Card;
