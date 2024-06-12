import { AboutAPIData } from '../schema';

export const aboutData: AboutAPIData = {
  intro: [
    `I am a communicative programmer with a great deal of experience in collaborating with people from different roles. 
        I can think from more than one perspective and make collaboration more efficient. 
        As a programmer with professional experience in software development for almost three years, 
        I can implement many kinds of gameplay features by improving graphics, 
        designing code architecture, and optimizing games efficiently`,
    `Currently I am a master's student studying Game & Media Technology at Utrecht University, Netherlands.`,
  ],
  programmingSkill: [
    `C++`,
    `C#`,
    `UE4/UE5 Blueprint`,
    `GLSL`,
    `Git`,
    `SQL`,
    `Shell Script`,
  ],
  framework: [`Unity`, `Unreal Engine`, `Open GL`],
  knowledge: [
    `Scrum`,
    `Git Flow`,
    `Design Pattern`,
    `Object Oriented Programming`,
    `Data Oriented Programming`,
    'UI Programming',
    `Desktop`,
    `Andorid/iOS`,
    'MVVM',
    'Data Structure / Algorithm'
  ],
  workExperience: [
    {
      title: `Unity Software Engineer`,
      subtitle: `Seekrtech, Taiwan, Jan. 2019 - June. 2021`,
      details: [
        `Worked on a mobile game from scratch until released in a cross-functional team`,
        `Take responsibility as the major Unity programmer.`,
        `Implemented game mechanics in Unity C# with UniRx, designed architecture and database schema`,
        `Executed project in agile framework, Scrum, scheduling work accurately`,
        `Defined art assets standard, developing level design and UI building tools, improving productivity`,
        `Supported senior Android engineer for a product that impacts over 30 million users, developing new
features, AB Testing with UI/UX designer, refactoring code base from Java to Kotlin, fixing bugs`
      ],
    },
    {
      title: `Front-End Engineer (Internship)`,
      subtitle: `Seekrtech, Taiwan, Jul. 2017 - Sep. 2017 / Jul. 2018 - Sep. 2018`,
      details: [
        `Refactored and maintain a browser extension game, improving performance significantly`,
        `Developed new features for the extension, increasing the number of users by 60,000`,
        `Developed several websites for the company and products with web langauges, and frameworks`,
        `Defined static website skeleton, significantly reducing time for developing a new website`,
        ` Implemented new features for the company’s internal system as a full-stack developer, using Vue.js, Ruby
on Rails, and PostgreSQL`,
      ],
    },
    {
      title: `Game Developer (Contract)`,
      subtitle: `Pinka, Jan. 2016 - May. 2017`,
      details: [
        `Designed game mechanics with educational features to teach English vocabulary`,
        `Implemented several significant gameplay features in C# with Unity, such as user input, UI, combat system, and map generation`,
        `Won 1st place in educational digital media competition, which contained over 20 other projects from three
                different universities eligible for rewards`,
      ],
    }
  ],
  projectExperience: [
    {
      title: `Gameplay Programmer`,
      subtitle: `Hourglass : Project Norn, Oct. 2017 - May. 2018`,
      details: [
        `Implemented several significant gameplay features such as player movement, item interaction, and boss AI`,
        `Collaborated with game designer, designing system and keeping it implementable`,
        `Imported shader effects for visual experience, making graphics more lively`,
        `Presented game at largest student exhibition in Taiwan, with over 80,000 people visiting`,
      ],
    },
  ],
  education: [
    {
      degree: `M.S. in Game & Media Technology`,
      school: `Utecht University, Netherlands`,
      period: `Sep. 2022 - Present`,
      details: [
        `Advanced programming techniques, specializing in optimizing performance effectively`,
        `Acquired knowledge of neural networks, leveraging AI technology to enhance game development process`,
        `Developed knowledge in computer graphics, including building a GPU ray tracer using C++`,
        `Participated in a research project focused on VR development, utilizing Python to create tools`
      ]
    },
    {
      degree: `B.A. in Information Comunication`,
      school: `Yuan Ze University, Taiwan`,
      period: `Sep. 2015 - Jul. 2018`,
      details: [
        `Fundamental computer science, data structure, and algorithm`,
        `Learned mobile app development using Android Studio for Andorid, and XCode for iOS`,
        `Developed a variety of games throughout the academic program`,
        `Specialized in gameplay and game AI programming, contributing significantly to the development and
         enhancement of game mechanics and AI systems.`
      ]
    }
  ],
};
