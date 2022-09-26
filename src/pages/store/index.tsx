import type { NextPage } from 'next';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../components/card';
import Header from '../../components/header';
import { ObjectProduct, Product } from '../../types/product';
import { CardStore, CardStoreP } from './styles';

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
      <CardStoreP>Products from our store</CardStoreP>
      <CardStore>
        {product &&
          product.map((bolinha) => (
            <Card productData={bolinha.attributes} key={bolinha.id} />
          ))}
      </CardStore>
    </>
  );
};

export default Store;
