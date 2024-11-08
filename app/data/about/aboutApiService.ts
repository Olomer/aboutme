import lang from "../../utils/langUtils";
import { about_cze, about_eng } from "./about";

const about = {
    getAboutData: () => {
        return lang.currentLanguage() == "cs" ? about_cze : about_eng;
    }
};

export default about;