import type { GetStaticProps, NextPage } from 'next'
import Meta from '../components/Meta';
import Intro from '../components/About/Intro';
import Experience from '../components/About/Experience';
import { AboutAPIData } from "../schema";
import { server } from '../config';
import Skill from '../components/About/Skill';

type AboutProps = {
    data: AboutAPIData
}

const About: NextPage<AboutProps> = ({data}) => {
  return (
    <>
      <Meta 
      title='About Hui-En Lin'
      description='hello'
      keywords='game'/>
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
    const res = await fetch(`${server}/api/about`);
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}