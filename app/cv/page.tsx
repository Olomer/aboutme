'use client';
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";

export default function Cv() {
    const { t } = useTranslation();

    return (
        <>
            {t('cv')}
        </>
    );
}
