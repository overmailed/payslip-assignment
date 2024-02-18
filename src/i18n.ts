import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import commonEn from "./i18n/en/common.json";

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
      en: {
        common: commonEn,
      },
    },
    defaultNS: 'common'
});

export default i18n;
