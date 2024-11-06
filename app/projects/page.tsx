'use client';
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import React from "react";

export default function Projects() {
    const { t } = useTranslation();

    return (
        <>
            {t('projects')}
        </>
    );
}
