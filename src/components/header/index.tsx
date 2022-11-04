import Link from 'next/link';
import { DivLogin, DivLogo, DivTitle, MenuDiv, SpanDiv } from './styles';

const Header = () => {
  return (
    <DivLogo>
      <DivTitle>
        <Link href="/">O chá lá</Link>
      </DivTitle>

      <MenuDiv>
        <SpanDiv>
          <Link href="/store">Loja</Link>
        </SpanDiv>
        <SpanDiv>
          <Link href="/bag">Sacola</Link>
        </SpanDiv>
      </MenuDiv>

      <DivLogin>
        <Link href="/login">Login</Link>
      </DivLogin>
    </DivLogo>
  );
};

export default Header;
