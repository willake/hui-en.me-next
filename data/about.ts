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
            location: `Seekrtech, Taichung, Taiwan`,
            period: `Jan. 2019 - June. 2021`,
            details: [
                `Worked on a mobile to-do list app with gamification feature in a cross-functional team`,
                `Implemented all game mechanics in C# with UniRx, designed code architecture and database schema`,
                `Defined art assets standard, developing level design and UI building tools, improving productivity`,
                `Executed project in scrum framework, scheduling work accurately`
            ]
        },
        {
            title: `Front-End Engineer (Internship)`,
            location: `Seekrtech, Taichung, Taiwan`,
            period: `Jul. 2017 - Sep. 2017 / Jul. 2018 - Sep. 2018`,
            details: [
                `Developed several websites for company and products with HTML, CSS and JavaScript`,
                `Refactored browser extension and developed new features, connecting server APIs`,
                `Defining static website skeleton for future product webpages`,
                `Work with seinor programmer to make browser extension comunicate with server`
            ]
        }
    ],
    projectExperience: [
        {
            role: `Gameplay Programmer`,
            title: `Hourglass : Project Norn`,
            period: `Oct. 2017 - May. 2018`,
            details: [
                `Discussed with game designer to solve problem between designing and programming, improved level design and remove bugs`,
                `Collaborated with game artist to promote efficiency and make graphic more lively`,
                `Implemented several significant gameplay features with Unity3D`
            ]
        },
        {
            role: `Game Developer (Contract)`,
            title: `Pinka`,
            period: `Jan. 2016 - May. 2017`,
            details: [
                `Designing game mechanics as a educational game`,
                `Implemented several significant gameplay feature such as user input, UI, combat system and map generating in C# with Unity`,
                `Won 1st place in competition, which contained over 20 other projects from 3 different university eligible for rewards`
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