import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import {
  ButtonLogin,
  ButtonReturn,
  DivLink,
  DivLogin,
  InputLogin,
} from '../../styles/login/styles';

const Login: NextPage = () => {
  const router = useRouter();

  const { to } = router.query;
  const [infoLogin, setInfoLogin] = useState({ email: '', senha: '' });

  const submitLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    localStorage.setItem('infoLogin', JSON.stringify(infoLogin));
    router.push(to?.toString() || '/');
  };
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
          <InputLogin
            type={'email'}
            value={infoLogin.email}
            onChange={(e) => {
              setInfoLogin({
                ...infoLogin,
                email: e.target.value,
              });
            }}
          />

          <label htmlFor="Senha">Senha:</label>
          <InputLogin
            type={'text'}
            value={infoLogin.senha}
            onChange={(e) => {
              setInfoLogin({
                ...infoLogin,
                senha: e.target.value,
              });
            }}
          />

          <DivLink>
            <a href="#">Esqueci minha senha</a>
          </DivLink>
          <div>
            <ButtonLogin onClick={submitLogin}>Entrar</ButtonLogin>
          </div>
        </DivLogin>
      </div>
    </>
  );
};

export default Login;
