import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
