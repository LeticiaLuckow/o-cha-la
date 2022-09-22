import Link from 'next/link';
import { DivLogin, DivLogo, DivTitle, MenuDiv, SpanDiv } from './styles';

const Header = () => {
  return (
    <DivLogo>
      <DivTitle>O chá lá</DivTitle>

      <MenuDiv>
        <SpanDiv>
          <Link href="#">Store</Link>
        </SpanDiv>
        <SpanDiv>
          <Link href="#">Bag</Link>
        </SpanDiv>
      </MenuDiv>

      <DivLogin>
        <Link href="#">Login</Link>
      </DivLogin>
    </DivLogo>
  );
};

export default Header;
