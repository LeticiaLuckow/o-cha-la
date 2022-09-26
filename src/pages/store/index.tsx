import type { NextPage } from 'next';
import Card from '../../components/card';
import Header from '../../components/header';
import { Product } from '../../types/product';
import { CardStore, CardStoreP } from './styles';

const Store: NextPage = () => {
  const products: Product[] = [
    {
      image:
        '	https://mir-s3-cdn-cf.behance.net/project_modules/fs/0da053118042529.60825aa663776.jpg',
      name: 'Cha de Camomila',
      fakePrice: 32,
      price: 26,
      description:
        'Lorem ipsum dolor sit amet. Sed saepe adipisci aut sapiente quasi et rerum sit totam saepe et quos minus At assumenda incidunt ut earum quibusdam. Qui sequi totam sed placeat nemo et fugit voluptatum eos vitae quisquam in earum consequatur est voluptatem dolor et quasi',
    },
    {
      image:
        '	https://mir-s3-cdn-cf.behance.net/project_modules/fs/0da053118042529.60825aa663776.jpg',
      name: 'Cha de Camomila',
      fakePrice: 32,
      price: 26,
      description:
        'Lorem ipsum dolor sit amet. Sed saepe adipisci aut sapiente quasi et rerum sit totam saepe et quos minus At assumenda incidunt ut earum quibusdam. Qui sequi totam sed placeat nemo et fugit voluptatum eos vitae quisquam in earum consequatur est voluptatem dolor et quasi',
    },
  ];

  return (
    <>
      <div>
        <Header />
      </div>
      <CardStoreP>Products from our store</CardStoreP>
      <CardStore>
        {products.map((bolinha) => (
          <Card productData={bolinha} key={bolinha.name} />
        ))}
      </CardStore>
    </>
  );
};

export default Store;
