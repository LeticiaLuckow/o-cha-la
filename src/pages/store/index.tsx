import type { NextPage } from 'next';
import Card from '../../components/card';
import Header from '../../components/header';
import { CardStore, CardStoreP } from './styles';

const Store: NextPage = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <CardStoreP>Products from our store</CardStoreP>
      <CardStore>
        <Card />
        <Card />
        <Card />
      </CardStore>
    </>
  );
};

export default Store;
