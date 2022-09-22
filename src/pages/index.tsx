import type { NextPage } from 'next';
import Header from '../components/header';
import MainContent from '../components/mainContent';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};

export default Home;
