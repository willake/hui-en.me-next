import type { GetStaticProps, NextPage } from 'next'
import Meta from '../components/Meta';
import Intro from '../components/About/Intro';
import Experience from '../components/About/Experience';
import { AboutAPIData } from "../schema";
import { server } from '../config';
import Skill from '../components/About/Skill';
import { aboutData } from '../data/about';

type AboutProps = {
    data: AboutAPIData
}

const About: NextPage<AboutProps> = ({data}) => {
  return (
    <>
      <Meta 
      title='About Hui-En Lin | Game Programmer Portfolio'
      description='About Me: I am a communicative programmer with a great deal of experience in collaborating with people from different roles. 
      I can think from more than one perspective and make collaboration more efficient. 
      As a programmer with professional experience in developing products with Unity for almost three years, 
      I can implement many kinds of gameplay features by improving graphics, 
      designing code architecture, and optimizing games efficiently'
      keywords='Game, Game Programeer, Game Developer, Hui En Lin, Hui-En, Willake, Programmer, Game Development, Game Portfolio, Portfolio'/>
      <Intro intro={data.intro}/>
      <Skill 
        programmingSkill={data.programmingSkill}
        framework={data.framework}
        knowledge={data.knowledge} />
      <Experience 
        workExperiences={data.workExperience}
        projectExperiences={data.projectExperience}
        educations={data.education}/>
    </>
  )
}

export default About;

export const getStaticProps: GetStaticProps<AboutProps> = async () => {
    return {
        props: {
          data: aboutData
        }
    }
}