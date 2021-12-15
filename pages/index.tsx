import type { GetStaticProps, NextPage } from 'next'
import Meta from '../components/Meta';
import Header from '../components/Home/Header';
import { HomeAPIData } from '../schema';
import { server } from '../config';
import Portfolio from '../components/Home/Portfolio';

type HomeProps = {
  data: HomeAPIData
}

const Home: NextPage<HomeProps> = ({data}) => {
  return (
    <>
      <Meta 
      title='Hui-En Lin | Game Programmer'
      description='hello'
      keywords='game'/>
      <Header />
      <Portfolio 
        professionals={data.professionalProjects}
        sides={data.sideProjects} />
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const res = await fetch(`${server}/api/home`);
  const data = await res.json();

  return {
      props: {
          data
      }
  }
}