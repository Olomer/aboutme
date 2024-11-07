const LANG_KEY = "next-export-i18n-lang"

const lang = {
    currentLanguage: () => {
        if (typeof localStorage !== 'undefined') {
            return localStorage?.getItem(LANG_KEY);
        }

        return "cs";
    },
};

export default lang;
