import type { NextPage } from 'next'
import Meta from '../components/Meta';
import Header from '../components/Home/Header';

const Home: NextPage = () => {
  return (
    <>
      <Meta 
      title='Hui-En Lin | Game Programmer'
      description='hello'
      keywords='game'/>
      <Header />
    </>
  )
}

export default Home;
