import type { NextPage } from 'next';
import Link from 'next/link';

import {
  ButtonLogin,
  ButtonReturn,
  DivLink,
  DivLogin,
  InputLogin,
} from './styles';

const Login: NextPage = () => {
  return (
    <>
      <ButtonReturn>
        <Link href="/bag">voltar</Link>
      </ButtonReturn>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'pacifico',
            fontSize: '38px',
            padding: '75px 0 25px 0px',
          }}
        >
          <Link href="/">O chá lá</Link>
        </div>

        <DivLogin>
          <div>
            <h2>Olá</h2>
            <p style={{ color: '#888' }}>
              Para continuar, digite seu e-mail e sua senha
            </p>
          </div>

          <label htmlFor="E-mail">E-mail:</label>
          <InputLogin type={'email'} />

          <label htmlFor="Senha">Senha:</label>
          <InputLogin type={'text'} />

          <DivLink>
            <a href="#">Esqueci minha senha</a>
          </DivLink>
          <div>
            <ButtonLogin>Entrar</ButtonLogin>
          </div>
        </DivLogin>
      </div>
    </>
  );
};

export default Login;
