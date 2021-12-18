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
    // const res = await fetch(
    //   `${server}/api/about`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "User-Agent":
    //         "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36", 
    //       Accept: "application/json; charset=UTF-8",
    //     },
    //   });

    // console.log(res);
    // const data = await res.json();

    return {
        props: {
          data: aboutData
        }
    }
}