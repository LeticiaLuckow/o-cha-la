import Link from 'next/link';

import { Product, ProductBag } from '../../types/product';
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
      alert('item adicionado ao carrinho');
    } else {
      alert('produto ja ta no carrinho');
    }
  };

  return (
    <>
      <CardDiv>
        <CardImage src={productData.image} />

        <Link href={`/productDescription/${id}`}>
          <NameProduct>{productData.name}</NameProduct>
        </Link>

        <FakePrice>U${productData.fakePrice.toFixed(2)}</FakePrice>
        <Price>U${productData.price.toFixed(2)}</Price>

        <ButtonCard onClick={addToCard}>Add to cart</ButtonCard>
      </CardDiv>
    </>
  );
};

export default Card;
