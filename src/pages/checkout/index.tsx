import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import { ProductBag } from '../../types/product';
import { PageTitles, TdCart, ThCart } from '../bag/styles';
import { ButtoCalculate, InputCep, PageSubTitles } from './styles';

const Checkout: NextPage = () => {
  const [bag, setBag] = useState<ProductBag[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(10);

  useEffect(() => {
    setBag(JSON.parse(localStorage.getItem('bag') || '[]') as ProductBag[]);
  }, []);
  // bag.filter((item) => item.product.name === productData.name).length === 0
  const CalcSubTotal = () => {
    const sun = bag.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0,
    );
    return sun;
  };

  useEffect(() => {
    setSubTotal(CalcSubTotal());
  }, [bag]);

  return (
    <>
      <Header />
      <PageTitles>Finalização de compra</PageTitles>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '22px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <PageSubTitles>Entrega</PageSubTitles>
          <InputCep
            type={'number'}
            placeholder={'digite seu cep'}
            maxLength={9}
            style={{ width: '100%', padding: '6px', marginTop: '20px' }}
          />
          <ButtoCalculate>calcular</ButtoCalculate>
        </div>

        <div style={{ width: '20%' }}>
          <PageSubTitles>Seu pedido</PageSubTitles>
          <table style={{ width: '100%', paddingTop: '20px' }}>
            <tbody>
              <tr>
                <ThCart>Subtotal</ThCart>
                <TdCart style={{ width: '100%' }}>
                  R$ {subTotal.toFixed(2)}
                </TdCart>
              </tr>
              <tr>
                <ThCart>Entrega</ThCart>
                <TdCart>R$ {shipping.toFixed(2)}</TdCart>
              </tr>
              <tr>
                <ThCart>Total</ThCart>
                <TdCart>R$ {(subTotal + shipping).toFixed(2)}</TdCart>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Checkout;
