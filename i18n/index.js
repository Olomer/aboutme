var en = require("./translations.en.json");
var cs = require("./translations.cs.json");

const i18n = {
    translations: {
        en,
        cs,
    },
    defaultLang: "cs",
    useBrowserDefault: true,
    languageDataStore: "localStorage",
};

module.exports = i18n;