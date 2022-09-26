import type { NextPage } from 'next';
import {
  ButtonCard,
  FakePrice,
  NameProduct,
  Price,
} from '../../components/card/styles';
import Header from '../../components/header';
import { Product } from '../../types/product';
import { DivProduct, ImgProduct } from './styles';

const ProductDescription: NextPage = () => {
  const productData: Product = {
    image:
      '	https://mir-s3-cdn-cf.behance.net/project_modules/fs/0da053118042529.60825aa663776.jpg',
    name: 'Cha de Camomila',
    fakePrice: 32,
    price: 26,
    description:
      'Lorem ipsum dolor sit amet. Sed saepe adipisci aut sapiente quasi et rerum sit totam saepe et quos minus At assumenda incidunt ut earum quibusdam. Qui sequi totam sed placeat nemo et fugit voluptatum eos vitae quisquam in earum consequatur est voluptatem dolor et quasi',
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <DivProduct>
        <ImgProduct src={productData.image} />
        <div>
          <NameProduct>{productData.name}</NameProduct>
          <FakePrice>{productData.fakePrice}</FakePrice>
          <Price>{productData.price}</Price>
          <p>{productData.description}</p>
          <ButtonCard>Buy</ButtonCard>
        </div>
      </DivProduct>
    </>
  );
};

export default ProductDescription;
