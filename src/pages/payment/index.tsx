import type { NextPage } from 'next';
import Link from 'next/link';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import { ProductBag } from '../../types/product';
import { PageTitles, TdCart, ThCart } from '../bag/styles';
import { ButtonCheckout, LabelInfo, PageSubTitles } from '../checkout/styles';
import { ButtonReturn } from '../login/styles';
import {
  ButtonPayment,
  DivPayTwo,
  DivPayment,
  InputTypeNumber,
  DivPayOne,
} from './styles';

const Payment: NextPage = () => {
  const [bag, setBag] = useState<ProductBag[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(10);
  const [payment, setPayment] = useState({
    numero: '',
    nomeDoTitular: '',
    dataDeValidade: '',
    cvv: '',
  });

  const router = useRouter();

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    localStorage.setItem('payment', JSON.stringify(payment));
  };

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

      <DivPayment>
        <DivPayOne>
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
        </DivPayOne>

        <DivPayTwo>
          <PageSubTitles>Dados do Cartão</PageSubTitles>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '308px',
              padding: '0 20px 0 20px',
            }}
            onSubmit={submitForm}
          >
            <LabelInfo>Número:</LabelInfo>
            <InputTypeNumber
              type={'number'}
              placeholder={'0000 0000 0000 0000'}
              value={payment.numero}
              onChange={(e) => {
                setPayment({
                  ...payment,
                  numero: e.target.value,
                });
              }}
            />

            <LabelInfo>Nome do titular:</LabelInfo>
            <input
              type={'text'}
              placeholder={'Nome impresso no cartão'}
              style={{ border: '1px solid #dadada' }}
              value={payment.nomeDoTitular}
              onChange={(e) => {
                setPayment({
                  ...payment,
                  nomeDoTitular: e.target.value,
                });
              }}
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
                    value={payment.dataDeValidade}
                    onChange={(e) => {
                      setPayment({
                        ...payment,
                        dataDeValidade: e.target.value,
                      });
                    }}
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
                    value={payment.cvv}
                    onChange={(e) => {
                      setPayment({
                        ...payment,
                        cvv: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonPayment type="submit">
                <Link href="/orderPlaced"> finalizar pedido</Link>
              </ButtonPayment>
            </div>
          </form>
        </DivPayTwo>
      </DivPayment>
    </>
  );
};

export default Payment;
