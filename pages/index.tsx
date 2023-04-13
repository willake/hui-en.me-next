import type { GetStaticProps, NextPage } from 'next';
import Meta from '../components/Meta';
import Header from '../components/Home/Header';
import { HomeAPIData } from '../schema';
import { server } from '../config';
import Portfolio from '../components/Home/Portfolio';
import { homeData } from '../data/home';

type HomeProps = {
  data: HomeAPIData;
};

const Home: NextPage<HomeProps> = ({ data }) => {
  return (
    <>
      <Meta
        title="Hui-En Lin | Game Programmer Portfolio"
        description="
      About Me: I am a communicative programmer with a great deal of experience in collaborating with people from different roles. 
      I can think from more than one perspective and make collaboration more efficient. 
      As a programmer with professional experience in developing products with Unity for almost three years, 
      I can implement many kinds of gameplay features by improving graphics, 
      designing code architecture, and optimizing games efficiently"
        keywords="Game, Game Programeer, Game Developer, Hui En Lin, Hui-En, Willake, Programmer, Game Development, Game Portfolio, Portfolio"
      />
      <Header />
      <Portfolio
        professionals={data.professionalProjects}
        sides={data.sideProjects}
      />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      data: homeData,
    },
  };
};
