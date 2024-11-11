'use client';
import NavButton from "./NavButton";
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import React from "react";
import { Avatar, Grid, Group, UnstyledButton, Box, Stack } from '@mantine/core';
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";

type NavMenuMobileProps = {
    onClose: () => void;
};

const NavMenuMobile: React.FC<NavMenuMobileProps> = ({ onClose }) => {
    {
        const { t } = useTranslation();

        return (
            <Stack onClick={onClose} gap={0} align="stretch">
                <NavButton href="/">{t('home')}</NavButton>
                <NavButton href="/cv">{t('cv')}</NavButton>
                <NavButton href="/contacts">{t('contacts')}</NavButton>
                <NavButton href="/publications">{t('publications')}</NavButton>
                <NavButton href="/projects">{t('projects')}</NavButton>
                <nav>
                    <LanguageSwitcher lang="cs"><Avatar my="lg" color="blue" radius="xl">CZ</Avatar></LanguageSwitcher>
                    <LanguageSwitcher lang="en"><Avatar color="red" radius="xl">EN</Avatar></LanguageSwitcher>
                </nav>
                <Box my="lg">
                    <ColorSchemeToggle />
                </Box>
            </Stack>
        );
    }
};

export default NavMenuMobile;