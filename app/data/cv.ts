import lang from "../utils/langUtils";

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

const education_cze: Array<Education> = [
    {
        year: "2017-2024",
        field: "Aplikovaná informatika (doktorské studium)",
        school: "Ostravská univerzita"
    },
    {
        year: "2015-2017",
        field: "Informační systémy (magisterské studium)",
        school: "Ostravská univerzita"
    },
    {
        year: "2012-2015",
        field: "Informatika (bakalářské studium)",
        school: "Ostravská univerzita"
    },
    {
        year: "2008-2012",
        field: "Elektrotechnika",
        school: "Střední Průmyslová Škola elektrotechniky a informatiky, Ostrava, Kratochvílova 7"
    }
]

const education_eng: Array<Education> = [
    {
        year: "2017-2024",
        field: "Applied Informatics (doctoral studies)",
        school: "University of Ostrava"
    },
    {
        year: "2015-2017",
        field: "Information systems (master studies)",
        school: "University of Ostrava"
    },
    {
        year: "2012-2015",
        field: "Informatics (bachelor studies)",
        school: "University of Ostrava"
    },
    {
        year: "2008-2012",
        field: "Electrical engineering",
        school: "Upper Secondary Technical School of Electrical Engineering and Computer Science, Ostrava, Kratochvílova 7"
    }
]


const experience_cze: Array<Experience> = [
    {
        year: "2022-dosud",
        position: "Odborný asistent",
        employer: "Ostravská univerzita, Ostrava",
        text: "<ul><li>Obor činností: programování, umělá inteligence, robotika, mapování prostoru.</li><li>Výuka studentů bakalářského studia, podílení se na vývoji interních systémů.</li></ul>"
    },
    {
        year: "2017-2023",
        position: "Vývoj multiplatformních a nativních mobilních aplikací",
        employer: "Ostravská univerzita, Ostrava",
        text: "<ul><li>Náplní práce byl vývoj multiplatformní a nativních mobilních aplikací jako je například Lovec Vážek CZ pro Android a iOS a podílení se na IT infrastruktuře projektu.</li></ul>"
    },
    {
        year: "2015-2017",
        position: "Vývoj mobilních a desktopových aplikací pro Windows",
        employer: " AiNeuron s.r.o., Havířov",
        text: "<ul><li>Náplní práce byl vývoj aplikací pro podporu podnikových procesů společnosti Automotive Lighting a vývoj univerzálních aplikací pro portál iDNES.cz.</li></ul>"
    }
];

const experience_eng = [
    {
        year: "2022-today",
        position: "Assistant professor",
        employer: "University of Ostrava, Ostrava.",
        text: "<ul><li>Field of activity: programming, artificial intelligence, robotics, space mapping.</li><li>Teaching bachelor students, participating in the development of internal systems.</li></ul>"
    },
    {
        year: "2017-2023",
        position: "Development of cross-platform and native mobile applications",
        employer: "University of Ostrava, Ostrava.",
        text: "<ul><li>The work involved developing multiplatform and native mobile applications, such as Lovec Vážek CZ for Android and iOS, as well as participating in the development of the IT infrastructure of the project.</li></ul>"
    },
    {
        year: "2015-2017",
        position: "Development of mobile and desktop applications for Windows and Windows Phone",
        employer: " AiNeuron s.r.o., Havířov",
        text: "<ul><li>This work involved developing applications to support the business processes of Automotive Lighting and the development of universal applications (UWP) for the iDNES.cz news.</li></ul>"
    }
];

const cv = {
    getExperienceData: () => {
        return lang.currentLanguage() == "cs" ? experience_cze : experience_eng;
    },
    getEducationData: () => {
        return lang.currentLanguage() == "cs" ? education_cze : education_eng;
    },
};

export default cv;