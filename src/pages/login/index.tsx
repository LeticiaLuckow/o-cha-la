import type { NextPage } from 'next';
import Header from '../../components/header';
import { DivLogin } from './styles';

const Login: NextPage = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div
        style={{
          padding: '12px 48px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <DivLogin>
          <label htmlFor="E-mail">E-mail</label>
          <input placeholder="Digite seu email" type={'email'} />

          <label htmlFor="Senha">Senha</label>
          <input placeholder="Digite sua senha" type={'text'} />
          <button>Entrar</button>
        </DivLogin>
      </div>
    </>
  );
};

export default Login;
