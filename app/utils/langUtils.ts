const LANG_KEY = "next-export-i18n-lang"

const lang = {
    currentLanguage: () => {
        if (typeof localStorage !== 'undefined') {
            const currentLang = localStorage?.getItem(LANG_KEY);
            if (currentLang !== null) {
                return currentLang;
            }
        }

        return "cs";
    },
};

export default lang;
