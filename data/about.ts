import { AboutAPIData } from "../schema";

export const data: AboutAPIData = {
    intro: [
        `Communicable programmer with experience in collaborating with people from different roles, 
        able to think in more than one perspective, making collaboration increasingly efficient. 
        As a programmer with professional experience in developing products with Unity for almost 3 years, 
        I have the ability of implementing gameplay features, improving graphic, designing code architecture and optimizing games effectively.`,
        `Now I am learning making computer games from scratch with C++. Console games would be my next goal to learn.`
    ],
    programmingSkill: [`C++`, `C#`, `UE4 Blueprint`, `GLSL`, `Git`, `SQL`, `Shell Script`],
    framework: [`Unity`, `Unreal Engine`, `Open GL`],
    knowledge: [`Scrum`, `Git Flow`, `Design Pattern`, `Object Oriented Programming`, `Data Oriented Programming`, `Desktop`, `Andorid/iOS`],
    workExperience: [
        {
            title: `Unity Software Engineer`,
            subtitle: `Seekrtech, Taichung, Taiwan, Jan. 2019 - June. 2021`,
            details: [
                `Worked on a mobile to-do list app with gamification feature in a cross-functional team`,
                `Implemented all game mechanics in C# with UniRx, designed code architecture and database schema`,
                `Defined art assets standard, developing level design and UI building tools, improving productivity`,
                `Executed project in Scrum framework, scheduling work accurately`
            ]
        },
        {
            title: `Front-End Engineer (Internship)`,
            subtitle: `Seekrtech, Taichung, Taiwan, Jul. 2017 - Sep. 2017 / Jul. 2018 - Sep. 2018`,
            details: [
                `Developed several websites for company and products with HTML, CSS, and JavaScript`,
                `Refactored browser extension, developed new features, and connected server APIs, increasing number of 
                users by 60,000`,
                `Defined static website skeleton for future product webpages, reducing time for developing a new website`
            ]
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
                `Presented game at largest student exhibition in Taiwan, with over 80,000 people visiting`
            ]
        },
        {
            title: `Game Developer (Contract)`,
            subtitle: `Pinka, Jan. 2016 - May. 2017`,
            details: [
                `Designed game mechanics with educational features to teach English vocabulary`,
                `Implemented several significant gameplay features in C# with Unity, such as user input, UI, combat system, and map generation`,
                `Won 1st place in educational digital media competition, which contained over 20 other projects from three
                different universities eligible for rewards`
            ]
        }
    ],
    education: [
        {
            degree: `B.A. in Information Comunication`,
            school: `Yuan Ze University, Taiwan`,
            period: `Sep. 2015 - Jul. 2018`
        },
        {
            degree: `B.A in Information Management`,
            school: `Yuan Ze University, Taiwan`,
            period: `Sep. 2013 - Jul. 2015`
        }
    ]
}