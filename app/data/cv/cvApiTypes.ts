export interface Experience {
    year: string,
    position: string,
    employer: string,
    text: string
}

export interface Education {
    year: string,
    field: string,
    school: string
}

export interface Skill {
    category: string,
    skills: string
}

export interface Language {
    language: string,
    expertise: string
}

export interface Activity {
    type: string,
    year: string,
    description: string
}

export interface Project {
    type: string,
    id: string,
    year: string,
    name: string,
    text: string
}