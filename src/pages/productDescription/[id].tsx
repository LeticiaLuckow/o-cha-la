import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import {
  ButtonCard,
  FakePrice,
  NameProduct,
  Price,
} from '../../components/card/styles';
import Header from '../../components/header';
import { ObjectProduct } from '../../types/product';
import { DivProduct, ImgProduct } from './styles';
import axios from 'axios';
import { useRouter } from 'next/router';

const ProductDescription: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<ObjectProduct>();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:1337/api/products/${id}`).then((response) => {
        console.log(response.data.data);
        setProduct(response.data.data);
      });
    }
  }, [id]);

  const buy = () => {
    alert('comprou');
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <DivProduct>
        {product && (
          <>
            <ImgProduct src={product.attributes.image} />
            <div>
              <NameProduct>{product.attributes.name}</NameProduct>
              <FakePrice>{product.attributes.fakePrice.toFixed(2)}</FakePrice>
              <Price>{product.attributes.price.toFixed(2)}</Price>
              <p>{product.attributes.description}</p>
              <ButtonCard onClick={buy}>Buy</ButtonCard>
            </div>
          </>
        )}
      </DivProduct>
    </>
  );
};

export default ProductDescription;
