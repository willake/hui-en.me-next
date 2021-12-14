export type WorkExperience = {
    title: string
    location: string,
    period: string,
    details: string[]
}

export type ProjectExperience = {
    role: string,
    title: string,
    period: string,
    details: string[]
}

export type Education = {
    degree: string,
    school: string,
    period: string
}

export type AboutAPIData = {
    intro: string[],
    programmingSkill: string[],
    framework: string[],
    knowledge: string[],
    workExperience: WorkExperience[],
    projectExperience: ProjectExperience[] 
    education: Education[]
}