import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Header from '../../components/header';
import axios from 'axios';
import {
  ButtonBuy,
  ButtonCartBag,
  ButtonDelete,
  CartDiv,
  CartP,
  ClearCartButton,
  DivButton,
  FlexDivMobile,
  PageTitles,
  PInfo,
  TableBag,
  TableDiv,
  TdBag,
  TdCart,
  ThBag,
  ThCart,
} from './styles';
import { ProductBag } from '../../types/product';
import Link from 'next/link';
import { CloseCircle } from '@styled-icons/evaicons-solid';
import { useRouter } from 'next/router';
import { useMediaQuery } from '../../utils/useMediaQuery';

const Bag: NextPage = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [bag, setBag] = useState<ProductBag[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const [shipping, setShipping] = useState(10);

  const router = useRouter();

  const buy = () => {
    const login = localStorage.getItem('infoLogin');
    if (!!login) {
      router.push('/checkout');
    } else {
      router.push('/login?to=checkout');
    }
  };
  useEffect(() => {
    setBag(JSON.parse(localStorage.getItem('bag') || '[]') as ProductBag[]);
  }, []);

  const deleteItem = (name: string) => {
    const result = bag.filter((productBag) => name !== productBag.product.name);
    setBag(result);
    localStorage.setItem('bag', JSON.stringify(result));
  };

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

  const clearCart = () => {
    localStorage.removeItem('bag');
    setBag([]);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <PageTitles>Carrinho</PageTitles>

      <TableDiv>
        <TableBag>
          {!isMobile && (
            <thead style={{ background: '#ededed' }}>
              <tr>
                <ThBag></ThBag>
                <ThBag></ThBag>
                <ThBag>Produto</ThBag>
                <ThBag>Preço</ThBag>
                <ThBag>Quantidade</ThBag>
                <ThBag>Subtotal</ThBag>
              </tr>
            </thead>
          )}

          <tbody>
            {bag &&
              bag.map((bolinha, index) => (
                <>
                  {isMobile ? (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        border: '1px solid #dadada',
                        padding: '12px',
                        marginBottom: '12px',
                      }}
                    >
                      <div
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                      >
                        <ButtonDelete
                          onClick={() => deleteItem(bolinha.product.name)}
                        >
                          <CloseCircle color="#739669fc" width={24} />
                        </ButtonDelete>
                      </div>
                      <div
                        style={{ display: 'flex', justifyContent: 'center' }}
                      >
                        <img
                          src={bolinha.product.image}
                          style={{ width: '100px' }}
                        />
                      </div>

                      <FlexDivMobile>
                        <PInfo>Produto:</PInfo>
                        <p>{bolinha.product.name}</p>
                      </FlexDivMobile>

                      <FlexDivMobile>
                        <PInfo>Preço:</PInfo>
                        <p>R$ {bolinha.product.price.toFixed(2)}</p>
                      </FlexDivMobile>

                      <FlexDivMobile>
                        <PInfo>Quantidade:</PInfo>
                        <input
                          type={'number'}
                          style={{ width: '52px', height: '36px' }}
                          value={bolinha.quantity}
                          onChange={(e) => {
                            const newBag = [...bag];
                            newBag[index].quantity = e.target.valueAsNumber;
                            localStorage.setItem('bag', JSON.stringify(newBag));

                            setBag(newBag);
                          }}
                        />
                      </FlexDivMobile>

                      <FlexDivMobile>
                        <PInfo>Subtotal:</PInfo>
                        <p>
                          R$
                          {(bolinha.product.price * bolinha.quantity).toFixed(
                            2,
                          )}
                        </p>
                      </FlexDivMobile>
                    </div>
                  ) : (
                    <tr key={bolinha.product.name + index.toString()}>
                      <TdBag>
                        <ButtonDelete
                          onClick={() => deleteItem(bolinha.product.name)}
                        >
                          <CloseCircle color="#739669fc" width={24} />
                        </ButtonDelete>
                      </TdBag>
                      <TdBag>
                        <img
                          src={bolinha.product.image}
                          style={{ width: '100px' }}
                        />
                      </TdBag>
                      <TdBag>{bolinha.product.name}</TdBag>
                      <TdBag>R$ {bolinha.product.price.toFixed(2)}</TdBag>
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
                              localStorage.setItem(
                                'bag',
                                JSON.stringify(newBag),
                              );

                              setBag(newBag);
                            }}
                          />
                        </div>
                      </TdBag>
                      <TdBag>
                        R${' '}
                        {(bolinha.product.price * bolinha.quantity).toFixed(2)}
                      </TdBag>
                    </tr>
                  )}
                </>
              ))}
          </tbody>
        </TableBag>
      </TableDiv>

      <div style={{ marginLeft: '150px', marginTop: '20px' }}>
        <ClearCartButton onClick={clearCart}>Limpar carrinho</ClearCartButton>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%',
          padding: '92px 0 92px 0',
        }}
      >
        <CartDiv>
          <CartP>Total no carrinho</CartP>
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

          <DivButton>
            <ButtonCartBag disabled={bag.length === 0} onClick={buy}>
              Finalizar compra
            </ButtonCartBag>

            <ButtonBuy>
              <Link href="/store">Continuar comprando</Link>
            </ButtonBuy>
          </DivButton>
        </CartDiv>
      </div>
    </>
  );
};

export default Bag;
