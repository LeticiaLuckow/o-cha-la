import type { NextPage } from 'next';
import Header from '../../components/header';
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

const Bag: NextPage = () => {
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
            <tr>
              <TdBag>
                <img
                  style={{ width: '120px', padding: '8px' }}
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/05fc9b149498459.62f3abbc6ee87.png"
                />
              </TdBag>
              <TdBag>Body1 linha1</TdBag>
              <TdBag>Body2 linha1</TdBag>
              <TdBag>Body3 linha1</TdBag>
              <TdBag>Body3 linha1</TdBag>
            </tr>
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
