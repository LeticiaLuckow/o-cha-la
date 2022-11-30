import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

import { Product, ProductBag } from '../../types/product';
import BagToast from '../bagToast';
import {
  ButtonCard,
  CardDiv,
  CardImage,
  FakePrice,
  NameProduct,
  Price,
} from './styles';

type CardType = {
  productData: Product;
  id: number;
};

const Card = ({ productData, id }: CardType) => {
  const [open, setOpen] = useState<boolean>(false);

  const addToCard = () => {
    // pega a bag do localstorage, salva numa variavel bag

    const bag = JSON.parse(localStorage.getItem('bag') || '[]') as ProductBag[];

    //aqui ele cria um objeto chamado newItem com a qtd e o product(productData que é um parametro)
    const newItem = {
      quantity: 1,
      product: productData,
    };

    //aqui ele adiciona o newitem dentro da variavel bag
    if (
      bag.filter((item) => item.product.name === productData.name).length === 0
    ) {
      bag.push(newItem);

      // armazena os valores no localstorege (localStorage.setItem) e isso transforma o array/obj em stringe (JSON.stringify(bag))
      localStorage.setItem('bag', JSON.stringify(bag));
      setOpen(true);
    } else {
      alert('produto ja adicionado ao carrinho');
    }
  };

  return (
    <>
      <CardDiv>
        <CardImage src={productData.image} />

        <Link href={`/productDescription/${id}`}>
          <NameProduct>{productData.name}</NameProduct>
        </Link>

        <FakePrice>R${productData.fakePrice.toFixed(2)}</FakePrice>
        <Price>R${productData.price.toFixed(2)}</Price>
        <div>
          <ButtonCard onClick={addToCard}>Adicionar ao carrinho</ButtonCard>
        </div>
      </CardDiv>
      <BagToast open={open} setOpen={setOpen} />
    </>
  );
};

export default Card;
