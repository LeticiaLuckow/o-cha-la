import type { NextPage } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/card';
import Header from '../../components/header';
import { ObjectProduct } from '../../types/product';
import { CardStore, CardStoreP } from './styles';
import BagToast from '../../components/bagToast';

const Store: NextPage = () => {
  const [product, setProduct] = useState<ObjectProduct[]>();

  useEffect(() => {
    axios.get('http://localhost:1337/api/products').then((response) => {
      console.log(response.data.data);
      setProduct(response.data.data);
    });
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
      <CardStoreP>Produtos da nossa loja</CardStoreP>
      <CardStore>
        {product &&
          product.map((bolinha) => (
            <Card
              productData={bolinha.attributes}
              key={bolinha.id}
              id={bolinha.id}
            />
          ))}
      </CardStore>
    </>
  );
};

export default Store;
