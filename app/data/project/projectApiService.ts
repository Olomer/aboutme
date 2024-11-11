import lang from "../../utils/langUtils";
import { work_projects_cze, work_projects_eng } from "./project";

const project = {
    getWorkProjectsData: () => {
        return lang.currentLanguage() == "cs" ? work_projects_cze : work_projects_eng;
    }
};

export default project;