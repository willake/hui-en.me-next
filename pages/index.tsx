import type { GetStaticProps, NextPage } from 'next'
import Meta from '../components/Meta';
import Header from '../components/Home/Header';
import { HomeAPIData } from '../schema';
import { server } from '../config';
import Portfolio from '../components/Home/Portfolio';
import { homeData } from '../data/home';


type HomeProps = {
  data: HomeAPIData
}

const Home: NextPage<HomeProps> = ({data}) => {
  return (
    <>
      <Meta 
      title='Hui-En Lin | Game Programmer'
      description='
        A Communicable programmer with experience in collaborating with people from different roles, 
        able to think in more than one perspective, making collaboration increasingly efficient. 
        As a programmer with professional experience in developing products with Unity for almost 3 years, 
        I have the ability of implementing gameplay features, improving graphic, designing code architecture and optimizing games effectively.'
      keywords='Game, Game Programeer, Game Developer, Hui En Lin, Hui-En, Willake, Programmer, Game Development'/>
      <Header />
      <Portfolio 
        professionals={data.professionalProjects}
        sides={data.sideProjects} />
    </>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
      props: {
        data: homeData
      }
  }
}