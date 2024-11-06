'use client';

import {
  useTranslation,
  LanguageSwitcher,
  LinkWithLocale
} from "next-export-i18n";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      {t('home')}
    </>
  );
}
