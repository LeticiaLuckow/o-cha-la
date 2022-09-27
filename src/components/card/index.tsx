import Link from 'next/link';
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
  id: number;
};

const Card = ({ productData, id }: CardType) => {
  return (
    <>
      <CardDiv>
        <CardImage src={productData.image} />

        <Link href={`/productDescription/${id}`}>
          <NameProduct>{productData.name}</NameProduct>
        </Link>

        <FakePrice>U${productData.fakePrice.toFixed(2)}</FakePrice>
        <Price>U${productData.price.toFixed(2)}</Price>
        <ButtonCard>Add to cart</ButtonCard>
      </CardDiv>
    </>
  );
};

export default Card;
