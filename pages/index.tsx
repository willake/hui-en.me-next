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
  // const res = await fetch(
  //   `${server}/api/home`,
  //   {
  //     method: "GET",
  //     headers: {
  //       // update with your user-agent
  //       "User-Agent":
  //         "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
  //       Accept: "application/json; charset=UTF-8",
  //     },
  //   });

  
  // const data = await res.json();

  return {
      props: {
        data: homeData
      }
  }
}