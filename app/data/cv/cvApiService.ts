import lang from "../../utils/langUtils";
import { experience_cze, experience_eng, education_cze, education_eng, skills_cze, skills_eng, languages_cze, languages_eng, activities_cze, activities_eng, projects_cze, projects_eng } from "./cv";

const cv = {
    getExperienceData: () => {
        return lang.currentLanguage() == "cs" ? experience_cze : experience_eng;
    },
    getEducationData: () => {
        return lang.currentLanguage() == "cs" ? education_cze : education_eng;
    },
    getSkillData: () => {
        return lang.currentLanguage() == "cs" ? skills_cze : skills_eng;
    },
    getLanguageData: () => {
        return lang.currentLanguage() == "cs" ? languages_cze : languages_eng;
    },
    getActivityData: () => {
        return lang.currentLanguage() == "cs" ? activities_cze : activities_eng;
    },
    getProjectData: () => {
        return lang.currentLanguage() == "cs" ? projects_cze : projects_eng;
    },
};

export default cv;