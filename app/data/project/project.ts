import { WorkProject } from "./projectApiTypes";

export const work_projects_cze: Array<WorkProject> = [
    {
        name: "EvalMe! ",
        description: "Cílem projektu je vytvořit evaluační systém pro hodnocení domácích úkolů z oblasti programování (ne však striktně) za pomocí algoritmů umělé inteligence (v současnosti LLM).",
        employer: "Osobní projekt",
        year: "2024-dosud",
        technologies: "React.js, TypeScript, ASP.NET, C#, POSTGRES, Ollama, Python, Docker",
        imagePath: "images/evalme.png",
        url: "https://gitlab.com/Olomer/code-evaluation"
    },
    {
        name: "Mapování vnitřního prostoru budovy pomocí dronu",
        description: "Disertační práce se zabývá tvorbou metodického rámce v oblasti mapování vnitřních prostorů budovy za pomocí dronu, jehož součástí má být detekce objektů v obrazu a autonomní navigace. Po úvodních částech a také popisu dronu včetně jeho potenciálních hardwarových rozšíření, je problematice věnována rešerše, která je rozdělená na tři hlavní části: mapování, detekce objektů a autonomní navigace. Cílem práce je pak návrh mapovacího systému, který do sebe integruje zmíněné tři oblasti, dále tento systém implementovat a ověřit za účelem vytvoření metodického rámce. V práci je věnován prostor tomu, jak při takovém vývoji postupovat, s jakými omezeními se lze setkat a jaké výstupy očekávat. V poslední části textu je definován metodický rámec, který vznikl na základě dlouhodobého vývoje zmíněného mapovacího systému. Mezi hlavní přínos této práce se řadí právě definovaný metodický rámec, jelikož ve všech třech oblastech existuje řada algoritmů či systémů, které se odlišují ve výstupech dat nebo využitých senzorických zařízeních. Pomocí vytvořeného rámce se lze v problematikách snadněji zorientovat, zvolit si vhodné instrumenty pro konkrétní zaměření a následně je možné podle něj postupovat a implementovat klíčové prvky vyvíjeného mapovacího systému.",
        employer: "Osobní projekt",
        year: "2017-2024",
        technologies: "ROS, Python, YOLO",
        imagePath: "images/mapping.jpeg",
        url: "https://gitlab.com/Olomer/drone-indoor-mapping"
    },
    {
        name: "Fotogrammetrie - Šilheřovice",
        description: "Cílem bylo vytvořit 3D modely reálných historických budov v obci Šilheřovice.",
        employer: "Ostravská univerzita",
        year: "2022-2024",
        technologies: "UAV, Stereofotogrammetrie, Meshroom, Colmap",
        imagePath: "images/silherovice.jpeg",
        url: "https://turista.silherovice.eu/model-fountain"
    },
    {
        name: "Lovec obojživelníků a plazů CZ",
        description: "Vývoj Androidí aplikace v technologii NativeScript. Vývoj iOS aplikace v jazyce Swift a storyboardů.",
        employer: "Ostravská univerzita",
        year: "2019-2023",
        technologies: "Android, NativeScript, JavaScript, iOS, Swift, Storyboards",
        imagePath: "images/herpeto.jpg",
        url: "https://www.biorecords.osu.cz/"
    },
    {
        name: "Lovec rovnokřídlých CZ",
        description: "Vývoj Androidí aplikace v technologii NativeScript. Vývoj iOS aplikace v jazyce Swift a storyboardů.",
        employer: "Ostravská univerzita",
        year: "2019-2023",
        technologies: "Android, NativeScript, JavaScript, iOS, Swift, Storyboards",
        imagePath: "images/orthoptera.jpg",
        url: "https://www.biorecords.osu.cz/"
    },
    {
        name: "Lovec vážek CZ",
        description: "Vývoj Androidí aplikace v technologii NativeScript. Vývoj iOS aplikace v jazyce Swift a storyboardů.",
        employer: "Ostravská univerzita",
        year: "2017-2023",
        technologies: "Android, NativeScript, JavaScript, iOS, Swift, Storyboards",
        imagePath: "images/dragonfly.png",
        url: "https://www.biorecords.osu.cz/"
    },
    {
        name: "EVKA",
        description: "Vývoj softwaru pro responzivní evaluaci a plánování komunitní práce jako nástroje pro rozvoj účinné a efektivní praxe v oblasti sociálního začleňování. Spolupráce na vývoji front-end aplikace v technologii Angular a spolupráce na vývoji back-end serveru v .NET Core.",
        employer: "Ostravská univerzita",
        year: "2018-2022",
        technologies: "Angular, TypeScript, ASP.NET, C#",
        imagePath: "images/evka.jpg",
        url: "https://evka.osu.cz/home"
    },
    {
        name: "Eddie",
        description: "Vývoj Android tabletové aplikace pro adaptivní neurorehabilitaci pacientů. Spolupráce na vývoji architektury softwaru, převážně komunikační vrstvy.",
        employer: "Ostravská univerzita",
        year: "2018-2022",
        technologies: "Android, Kotlin, RabbitMQ",
        imagePath: "images/eddie.jpg",
        url: "https://eddie.osu.cz/"
    },
    {
        name: "Geodata",
        description: "Vývoj back-end serveru v technologii .NET Core. Webová aplikace slouží pro jednoduché získání environmentálních dat ke konkrétním souřadnicím (GPS bodům). Data jsou získávána z volně dostupných rastrových dat o různém rozlišení. Pro získání dat uživatel vybere požadované vrstvy, zadá souřadnice (ručně nebo ze souboru) a e-mailovou adresu, na kterou po výpočtu obdrží výsledky. Výsledná tabulka obsahuje původní souřadnice a sloupce s hodnotami vybraných vrstev.",
        employer: "Ostravská univerzita",
        year: "2019-2020",
        technologies: "ASP.NET, C#, R",
        imagePath: "images/geodata.jpg",
        url: "https://www.biorecords.osu.cz/geodata/"
    },
    {
        name: "Komunikační rozhraní k robotům",
        description: "Programování komunikační knihovny na platformě .NET pro vzájemnou komunikaci s roboty dostupnými na Katedře informatiky a počítačů Přírodovědecké fakulty Ostravské univerzity.",
        employer: "Ostravská univerzita",
        year: "2016-2017",
        technologies: ".NET, WPF, C#, Node.js",
        imagePath: "images/robotics.png",
        url: undefined
    },
    {
        name: "Automotive testovací aplikace",
        description: "Vývoj front-end desktopové aplikace pro správu výsledků testování světel a jiných dílů. Částečná participace i na back-end službě. Aplikace byla vyvíjená ve WPF a back-end v ASP.NET Web API.",
        employer: "AiNeuron s.r.o.",
        year: "2016-2017",
        technologies: ".NET, WPF, ASP.NET, WEB API, C#",
        imagePath: "images/traceability.jpg",
        url: undefined
    },
    {
        name: "Ovládání dronu pomocí gest",
        description: "Diplomová práce na téma ovládání dronu pomocí gest.",
        employer: "Osobní projekt",
        year: "2015-2017",
        technologies: "OpenCV, .NET, WPF, C#, JavaScript, Node.js",
        imagePath: "images/drone_controll.jpg",
        url: "https://gitlab.com/OU-Projects/DroneControll"
    },
    {
        name: "iDNES",
        description: "Vývoj zpravodajské aplikace iDNES pro Windows Mobile 8.1 a následně pro UWP platformu (pc, tablet, mobil).",
        employer: "AiNeuron s.r.o.",
        year: "2015-2017",
        technologies: "Windows Phone 8.1, (UWP - pc, tablet, mobile)",
        imagePath: "images/idnes.png",
        url: "https://apps.microsoft.com/detail/9nblggh0908c?hl=cs-cz&gl=CZ"
    }
];

export const work_projects_eng: Array<WorkProject> = [
    {
        name: "EvalMe! ",
        description: "The goal of the project is to create an evaluation system for assessing programming assignments (but not strictly limited to programming) using artificial intelligence algorithms (currently LLMs).",
        employer: "Personal project",
        year: "2024-today",
        technologies: "React.js, TypeScript, ASP.NET, C#, POSTGRES, Ollama, Python, Docker",
        imagePath: "images/evalme.png",
        url: "https://gitlab.com/Olomer/code-evaluation"
    },
    {
        name: "Drone-based indoor mapping",
        description: "The dissertation focuses on creating a methodological framework for indoor building mapping using drones, including object detection in images and autonomous navigation. Following the introductory sections and a description of the drone, including potential hardware extensions, a review of the topic is presented, divided into three main areas: mapping, object detection, and autonomous navigation. The goal of the research is to design, implement, and validate a mapping system that integrates these three areas to create a methodological framework. The dissertation also covers the development process, potential limitations, and expected outcomes. In the final part, the methodological framework, developed based on the long-term progress of the mapping system, is defined. A significant contribution of this research is the established framework, as there are numerous algorithms or systems in each of the three areas that vary in data output or sensor devices used. The framework helps navigate these challenges, select appropriate tools for specific focus areas, and provides a structured approach to implementing key elements of the mapping system under development.",
        employer: "Personal project",
        year: "2017-2024",
        technologies: "ROS, Python, YOLO",
        imagePath: "images/mapping.jpeg",
        url: "https://gitlab.com/Olomer/drone-indoor-mapping"
    },
    {
        name: "Photogrammetry - Šilheřovice",
        description: "The goal was to create 3D models of real historical buildings in the village of Šilheřovice.",
        employer: "University of Ostrava",
        year: "2022-2024",
        technologies: "UAV, Stereophotogrammetry, Meshroom, Colmap",
        imagePath: "images/silherovice.jpeg",
        url: "https://turista.silherovice.eu/model-fountain"
    },
    {
        name: "Herpeto Hunter CZ",
        description: "Development of an Android application using NativeScript technology. Development of an iOS application in Swift with storyboards.",
        employer: "University of Ostrava",
        year: "2019-2023",
        technologies: "Android, NativeScript, JavaScript, iOS, Swift, Storyboards",
        imagePath: "images/herpeto.jpg",
        url: "https://www.biorecords.osu.cz/"
    },
    {
        name: "Orthoptera Hunter CZ",
        description: "Development of an Android application using NativeScript technology. Development of an iOS application in Swift with storyboards.",
        employer: "University of Ostrava",
        year: "2019-2023",
        technologies: "Android, NativeScript, JavaScript, iOS, Swift, Storyboards",
        imagePath: "images/orthoptera.jpg",
        url: "https://www.biorecords.osu.cz/"
    },
    {
        name: "Dragonfly Hunter CZ",
        description: "Development of an Android application using NativeScript technology. Development of an iOS application in Swift with storyboards.",
        employer: "University of Ostrava",
        year: "2017-2023",
        technologies: "Android, NativeScript, JavaScript, iOS, Swift, Storyboards",
        imagePath: "images/dragonfly.png",
        url: "https://www.biorecords.osu.cz/"
    },
    {
        name: "EVKA",
        description: "Development of software for responsive evaluation and planning of community work as a tool to enhance effective and efficient practices in social inclusion. Collaboration on the development of a front-end application using Angular and on the development of a back-end server in .NET Core.",
        employer: "University of Ostrava",
        year: "2018-2022",
        technologies: "Angular, TypeScript, ASP.NET, C#",
        imagePath: "images/evka.jpg",
        url: "https://evka.osu.cz/home"
    },
    {
        name: "Eddie",
        description: "Development of an Android tablet application for adaptive neurorehabilitation of patients. Collaboration on software architecture development, primarily the communication layer.",
        employer: "University of Ostrava",
        year: "2018-2022",
        technologies: "Android, Kotlin, RabbitMQ",
        imagePath: "images/eddie.jpg",
        url: "https://eddie.osu.cz/"
    },
    {
        name: "Geodata",
        description: "Development of a back-end server using .NET Core technology. The web application provides easy access to environmental data for specific coordinates (GPS points). Data is sourced from freely available raster datasets of varying resolutions. To retrieve data, the user selects the desired layers, enters coordinates (manually or from a file), and provides an email address to receive the results after processing. The resulting table contains the original coordinates and columns with values from the selected layers.",
        employer: "University of Ostrava",
        year: "2019-2020",
        technologies: "ASP.NET, C#, R",
        imagePath: "images/geodata.jpg",
        url: "https://www.biorecords.osu.cz/geodata/"
    },
    {
        name: "Communication interface for robots",
        description: "Programming a communication library on the .NET platform for interaction with robots available at the Department of Informatics and Computers, Faculty of Science, University of Ostrava.",
        employer: "University of Ostrava",
        year: "2016-2017",
        technologies: ".NET, WPF, C#, Node.js",
        imagePath: "images/robotics.png",
        url: undefined
    },
    {
        name: "Automotive test application",
        description: "Development of a front-end desktop application for managing test results of lights and other components, with partial participation on the back-end service. The application was developed using WPF, and the back-end was built with ASP.NET Web API.",
        employer: "AiNeuron s.r.o.",
        year: "2016-2017",
        technologies: ".NET, WPF, ASP.NET, WEB API, C#",
        imagePath: "images/traceability.jpg",
        url: undefined
    },
    {
        name: "Quadrocopter control via gestures",
        description: "Master’s thesis on controlling a drone through gestures.",
        employer: "Personal project",
        year: "2015-2017",
        technologies: "OpenCV, .NET, WPF, C#, JavaScript, Node.js",
        imagePath: "images/drone_controll.jpg",
        url: "https://gitlab.com/OU-Projects/DroneControll"
    },
    {
        name: "iDNES",
        description: "Development of the iDNES news application for Windows Mobile 8.1, followed by adaptation for the UWP platform (PC, tablet, mobile).",
        employer: "AiNeuron s.r.o.",
        year: "2015-2017",
        technologies: ".NET, Windows Phone 8.1, (UWP - pc, tablet, mobile)",
        imagePath: "images/idnes.png",
        url: "https://apps.microsoft.com/detail/9nblggh0908c?hl=en-US&gl=US"
    }
];