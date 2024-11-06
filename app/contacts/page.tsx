'use client';
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";

export default function Contacts() {
    const { t } = useTranslation();

    return (
        <>
            {t('contacts')}
        </>
    );
}
