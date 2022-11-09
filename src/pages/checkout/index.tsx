import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import { ProductBag } from '../../types/product';
import { PageTitles, TdCart, ThCart } from '../bag/styles';
import { useRouter } from 'next/router';
import {
  ButtoCalculate,
  InputAddress,
  InputCep,
  LabelInfo,
  PageSubTitles,
} from './styles';
import { ButtonReturn } from '../login/styles';
import Link from 'next/link';

const Checkout: NextPage = () => {
  const [bag, setBag] = useState<ProductBag[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(10);
  const [address, setAddress] = useState({
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    cidade: '',
    estado: '',
  });
  const router = useRouter();

  const submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(address);
    localStorage.setItem('address', JSON.stringify(address));
  };
  useEffect(() => {
    const localBag = JSON.parse(localStorage.getItem('bag') || '[]');

    localBag.length === 0 && router.push('/bag');
    setBag(localBag);
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
      <ButtonReturn>
        <Link href="/bag">voltar</Link>
      </ButtonReturn>
      <PageTitles>Finalização de compra</PageTitles>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '22px',
        }}
      >
        <form onSubmit={submitForm}>
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '400px' }}
          >
            <PageSubTitles>Entrega</PageSubTitles>

            <LabelInfo>CEP</LabelInfo>
            <InputCep
              type={'number'}
              placeholder={'Digite seu cep'}
              maxLength={9}
              value={address.cep}
              onChange={(e) => {
                setAddress({
                  ...address,
                  cep: e.target.value,
                });
              }}
            />

            <LabelInfo>Endereço</LabelInfo>
            <InputAddress
              type={'text'}
              placeholder={'Digite seu endereço'}
              value={address.endereco}
              onChange={(e) => {
                setAddress({
                  ...address,
                  endereco: e.target.value,
                });
              }}
            />

            <LabelInfo>Numero</LabelInfo>
            <InputCep
              type={'number'}
              value={address.numero}
              onChange={(e) => {
                setAddress({
                  ...address,
                  numero: e.target.value,
                });
              }}
            />

            <LabelInfo>Complemento</LabelInfo>
            <InputAddress
              placeholder={'Casa, apartamento, sala, etc.'}
              value={address.complemento}
              onChange={(e) => {
                setAddress({
                  ...address,
                  complemento: e.target.value,
                });
              }}
            />

            <LabelInfo>Cidade</LabelInfo>
            <InputAddress
              value={address.cidade}
              onChange={(e) => {
                setAddress({
                  ...address,
                  cidade: e.target.value,
                });
              }}
            />

            <LabelInfo>Estado</LabelInfo>
            <InputAddress
              value={address.estado}
              onChange={(e) => {
                setAddress({
                  ...address,
                  estado: e.target.value,
                });
              }}
            />

            <ButtoCalculate type="submit">calcular</ButtoCalculate>
          </div>
        </form>

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