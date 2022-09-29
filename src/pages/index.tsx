import type { NextPage } from 'next';

import Header from '../components/header';
import MainContent from '../components/mainContent';

const Home: NextPage = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(270deg, rgba(224,254,215,0.9923319669664741) 50%, rgba(254,243,255,1) 50%)',
        minHeight: '100vh',
      }}
    >
      <Header />
      <MainContent />
    </div>
  );
};

export default Home;
