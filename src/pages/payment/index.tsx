import type { NextPage } from 'next';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import { ProductBag } from '../../types/product';
import { PageTitles, TdCart, ThCart } from '../bag/styles';
import { LabelInfo, PageSubTitles } from '../checkout/styles';
import { ButtonReturn } from '../login/styles';
import { InputTypeNumber } from './styles';

const Payment: NextPage = () => {
  const [bag, setBag] = useState<ProductBag[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(10);

  const router = useRouter();

  useEffect(() => {
    const localBag = JSON.parse(localStorage.getItem('bag') || '[]');

    localBag.length === 0 && router.push('/bag');
    setBag(localBag);
  }, []);

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
      <ButtonReturn>
        <Link href="/checkout">voltar</Link>
      </ButtonReturn>
      <PageTitles>Forma de pagamento</PageTitles>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '22px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #dadada',
            borderRadius: '4px',
            alignItems: 'center',
          }}
        >
          <PageSubTitles>Selecione a Forma de Pagamento</PageSubTitles>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',

              width: '308px',
            }}
          >
            <LabelInfo>Número:</LabelInfo>
            <InputTypeNumber
              type={'number'}
              placeholder={'0000 0000 0000 0000'}
            />

            <LabelInfo>Nome do titular:</LabelInfo>
            <input
              type={'text'}
              placeholder={'Nome impresso no cartão'}
              style={{ border: '1px solid #dadada' }}
            />

            <div
              style={{
                display: 'flex',
                gap: '34px',
                marginTop: '10px',
              }}
            >
              <div>
                <LabelInfo>Data de validade:</LabelInfo>
                <div>
                  <InputTypeNumber
                    type={'number'}
                    placeholder={'mm/aa'}
                    style={{ width: '74px' }}
                  />
                </div>
              </div>

              <div>
                <LabelInfo>CVV:</LabelInfo>
                <div>
                  <InputTypeNumber
                    type={'number'}
                    placeholder={'000'}
                    style={{ width: '74px' }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div
          style={{
            width: '20%',
            border: '1px solid #dadada',
            borderRadius: '4px',
          }}
        >
          <PageSubTitles>Seu pedido</PageSubTitles>
          <table style={{ padding: '20px' }}>
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
          <div style={{ display: 'flex', justifyContent: 'center' }}></div>
        </div>
      </div>
    </>
  );
};

export default Payment;
