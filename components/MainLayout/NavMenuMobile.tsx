'use client';
import NavButton from "./NavButton";
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import React from "react";
import { Avatar, Grid, Group, UnstyledButton, Box, Stack } from '@mantine/core';

type NavMenuMobileProps = {
    onClose: () => void;
};

const NavMenuMobile: React.FC<NavMenuMobileProps> = ({ onClose }) => {
    {
        const { t } = useTranslation();

        return (
            <>
                <Stack onClick={onClose} gap={0} align="stretch">
                    <NavButton href="/">{t('home')}</NavButton>
                    <NavButton href="/cv">{t('cv')}</NavButton>
                    <NavButton href="/contacts">{t('contacts')}</NavButton>
                    <NavButton href="/publications">{t('publications')}</NavButton>
                    <NavButton href="/projects">{t('projects')}</NavButton>
                </Stack>
            </>
        );
    }
};

export default NavMenuMobile;