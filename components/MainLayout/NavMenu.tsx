'use client';
import NavButton from "./NavButton";
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import React from "react";

export default function NavMenu() {
    const { t } = useTranslation();

    return (
        <>
            <NavButton href="/">{t('home')}</NavButton>
            <NavButton href="/cv">{t('cv')}</NavButton>
            <NavButton href="/contacts">{t('contacts')}</NavButton>
            <NavButton href="/publications">{t('publications')}</NavButton>
            <NavButton href="/projects">{t('projects')}</NavButton>
            <nav>
                <LanguageSwitcher lang="cs">Czech</LanguageSwitcher>
                <LanguageSwitcher lang="en">English</LanguageSwitcher>
            </nav>
        </>
    );
}