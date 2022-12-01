import type { NextPage } from 'next';
import Header from '../../components/header';
import { CheckmarkCircle2 } from '@styled-icons/evaicons-solid';
import { ButtonNewRequest, OrderP } from './styles';
import { ButtonReturn } from '../login/styles';
import Link from 'next/link';

const orderPlaced: NextPage = () => {
  const itemsRemove = () => {
    localStorage.removeItem('bag');
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <ButtonReturn>
        <Link href="/">voltar ao início</Link>
      </ButtonReturn>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '22px',
        }}
      >
        <CheckmarkCircle2 width={'250px'} color={'green'} />
        <OrderP>Pedido realizado com sucesso</OrderP>
        <ButtonNewRequest onClick={itemsRemove}>
          <Link href="/store">Realizar novo pedido</Link>
        </ButtonNewRequest>
      </div>
    </>
  );
};

export default orderPlaced;
