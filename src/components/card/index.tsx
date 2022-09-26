import { Product } from '../../types/product';
import {
  ButtonCard,
  CardDiv,
  CardImage,
  FakePrice,
  NameProduct,
  Price,
} from './styles';

type CardType = {
  productData: Product;
};

const Card = ({ productData }: CardType) => {
  return (
    <>
      <CardDiv>
        <CardImage src={productData.image} />
        <NameProduct>{productData.name}</NameProduct>
        <FakePrice>{productData.fakePrice}</FakePrice>
        <Price>{productData.price}</Price>
        <ButtonCard>Add to cart</ButtonCard>
      </CardDiv>
    </>
  );
};

export default Card;
