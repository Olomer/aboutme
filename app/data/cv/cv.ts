import { Project, Activity, Language, Skill, Education, Experience } from "./cvApiTypes";


export const projects_cze: Array<Project> = [
    {
        type: "GAČR",
        id: "20-07851S",
        year: "2020-2023",
        name: "Fuzzy relační struktury v přibližném usuzování",
        text: "<ul><li>Integrace nových rozhodovacích algoritmů do mobilních aplikací.</ul></li>"
    },
    {
        type: "TAČR",
        id: "TL02000313",
        year: "2019-2022",
        name: "Chytrý neuro-rehabilitační systém pro pacienty se získaným poškozením mozku v časných stádiích léčby",
        text: "<ul><li>Návrh a tvorba her určených ke zlepšování mozkových oblastí, návrh a tvorba aplikace pro tablety.</ul></li>"
    },
    {
        type: "MŠMT",
        id: "03557/2019/ŠMS",
        year: "2019-2021",
        name: "Podpora nadaných žáků středních škol v Moravskoslezském kraji",
        text: "<ul><li>Příprava a vedení kurzů z oblasti programování a umělé inteligence pro studenty středních škol.</ul></li>"
    },
    {
        type: "TAČR",
        id: "TL01000351",
        year: "2018-2020",
        name: "Vývoj softwaru pro responzivní evaluaci a plánování komunitní práce jako nástroje pro rozvoj účinné a efektivní praxe v oblasti sociálního začleňování",
        text: "<ul><li>Návrh a tvorba webové aplikace pro software zabývající se responsivní evaluací a plánováním komunitních prací.</ul></li>"
    }
];

export const projects_eng: Array<Project> = [
    {
        type: "GAČR",
        id: "20-07851S",
        year: "2020-2023",
        name: "Fuzzy relational structures in approximate inference",
        text: "<ul><li>Integration of new decision algorithms into mobile applications.</ul></li>"
    },
    {
        type: "TAČR",
        id: "TL02000313",
        year: "2019-2022",
        name: "A smart neuro-rehabilitation system for patients with acquired brain damage in the early stages of treatment",
        text: "<ul><li>Design and creation of games designed to improve brain areas, design and creation of an application for tablets.</ul></li>"
    },
    {
        type: "MŠMT",
        id: "03557/2019/ŠMS",
        year: "2019-2021",
        name: "Supporting talented high school students in the Moravian-Silesian Region",
        text: "<ul><li>Preparing and leading courses in programming and artificial intelligence for high school students.</ul></li>"
    },
    {
        type: "TAČR",
        id: "TL01000351",
        year: "2018-2020",
        name: "Software development for responsive evaluation and planning of community work as a tool for the development of effective and efficient practice in the field of social inclusion",
        text: "<ul><li>Design and creation of a web application for software focused on responsive evaluation and community work planning.</ul></li>"
    }
];

export const activities_cze: Array<Activity> = [
    {
        type: "Disertační práce",
        year: "2024",
        description: "MALINA, Marek. <i>Mapování vnitřních prostorů budovy pomocí dronu.</i> Ostravská univerzita. Ostrava."
    },
    {
        type: "Diplomová práce",
        year: "2017",
        description: "MALINA, Marek. <i>Ovládání kvadrokoptéry pomocí gest.</i> Ostravská univerzita. Ostrava."
    },
    {
        type: "Bakalářská práce",
        year: "2015",
        description: "MALINA, Marek. <i>Využití hlasového ovládání v aplikacích na platformě Windows Phone.</i> Ostravská univerzita. Ostrava."
    }
];

export const activities_eng: Array<Activity> = [
    {
        type: "Dissertation",
        year: "2024",
        description: "MALINA, Marek. <i>Drone-based indoor mapping.</i> Ostrava, 2024. University of Ostrava."
    },
    {
        type: "Master’s thesis",
        year: "2017",
        description: "MALINA, Marek. <i>Quadrocopter control via gestures.</i> Ostrava, 2017. University of Ostrava."
    },
    {
        type: "Bachelor’s thesis",
        year: "2015",
        description: "MALINA, Marek. <i>Windows Phone voice control capable applications.</i> Ostrava, 2015. University of Ostrava."
    }
];

export const languages_cze: Array<Language> = [
    {
        language: "Angličtina",
        expertise: "Středně pokročilá. Komunikace v oblasti IT, práce s dokumentací."
    }
];

export const languages_eng: Array<Language> = [
    {
        language: "English",
        expertise: "Intermediate. Communication in the field of IT, working with documentations."
    }
];

export const skills_cze: Array<Skill> = [
    {
        category: "Základní",
        skills: "Strojové učení, stereofotogrammetrie a 3D modelování, práce s rastrovou a vektorovou grafikou, RabbitMQ, SQL, Oracle, Angular, Bootstrap, Node.js, C++."
    },
    {
        category: "Pokročilé",
        skills: "Java, Kotlin, Jetpack Compose, Swift, NativeScript, programování pro iOS a Android, správa Linux serveru."
    },
    {
        category: "Aktivně užívané",
        skills: "ASP.NET/Core, C#, Entity Framework, REST API, Python, ROS, Ollama, HTML, CSS, MUI, React, TypeScript."
    },
];

export const skills_eng: Array<Skill> = [
    {
        category: "Basic",
        skills: "Machine learning, stereophotogammetry and 3D modeling, working with raster and vector graphics, RabbitMQ, SQL, Oracle, Angular, Bootstrap, Node.js, C++."
    },
    {
        category: "Advanced",
        skills: "Java, Kotlin, Jetpack Compose, Swift, NativeScript, programming for iOS and Android, Linux server administration."
    },
    {
        category: "Actively used",
        skills: "ASP.NET/Core, C#, Entity Framework, REST API, Python, ROS, Ollama, HTML, CSS, MUI, React, TypeScript."
    },
];

export const education_cze: Array<Education> = [
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
];

export const education_eng: Array<Education> = [
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
];

export const experience_cze: Array<Experience> = [
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

export const experience_eng = [
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