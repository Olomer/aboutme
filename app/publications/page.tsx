'use client';
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import React from "react";

export default function Publications() {
    const { t } = useTranslation();

    return (
        <>
            {t('publications')}
        </>
    );
}
