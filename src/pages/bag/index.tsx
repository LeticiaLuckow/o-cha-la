import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import axios from 'axios';
import {
  BagP,
  ButtonCartBag,
  ButtonCartDelete,
  CartP,
  TableBag,
  TdBag,
  TdCart,
  ThBag,
  ThCart,
} from './styles';
import { ProductBag } from '../../types/product';

const Bag: NextPage = () => {
  const [bag, setBag] = useState<ProductBag[]>([]);

  useEffect(() => {
    setBag(JSON.parse(localStorage.getItem('bag') || '[]') as ProductBag[]);
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>
      <BagP>Carrinho</BagP>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '80px',
        }}
      >
        <TableBag>
          <thead style={{ background: '#ededed' }}>
            <tr>
              <ThBag></ThBag>
              <ThBag>Produto</ThBag>
              <ThBag>Preço</ThBag>
              <ThBag>Quantidade</ThBag>
              <ThBag>Subtotal</ThBag>
            </tr>
          </thead>

          <tbody>
            {bag &&
              bag.map((bolinha, index) => (
                <tr key={bolinha.product.name + index.toString()}>
                  <>
                    <TdBag>
                      <img
                        src={bolinha.product.image}
                        style={{ width: '100px' }}
                      />
                    </TdBag>
                    <TdBag>{bolinha.product.name}</TdBag>
                    <TdBag>{bolinha.product.price.toFixed(2)}</TdBag>
                    <TdBag>
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <input
                          type={'number'}
                          style={{ width: '52px' }}
                          value={bolinha.quantity}
                          onChange={(e) => {
                            const newBag = [...bag];
                            newBag[index].quantity = e.target.valueAsNumber;
                            localStorage.setItem('bag', JSON.stringify(newBag));

                            setBag(newBag);
                          }}
                        />
                      </div>
                    </TdBag>
                    <TdBag>{}</TdBag>
                  </>
                </tr>
              ))}
          </tbody>
        </TableBag>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          paddingTop: '82px',
        }}
      >
        <div style={{ width: '40%', marginRight: '126px' }}>
          <CartP>Total no carrinho</CartP>
          <table style={{ width: '100%', paddingTop: '20px' }}>
            <tbody>
              <tr>
                <ThCart>Subtotal</ThCart>
                <TdCart style={{ width: '100%' }}>edfbgftnhxgymj</TdCart>
              </tr>
              <tr>
                <ThCart>Entrega</ThCart>
                <TdCart>efsf</TdCart>
              </tr>
              <tr>
                <ThCart>Total</ThCart>
                <TdCart>efsf</TdCart>
              </tr>
            </tbody>
          </table>
          <ButtonCartBag>Finalizar compra</ButtonCartBag>
          <ButtonCartDelete>Delete</ButtonCartDelete>
        </div>
      </div>
    </>
  );
};

export default Bag;
