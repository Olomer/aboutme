'use client';
import NavButton from "./NavButton";
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import React from "react";
import { Avatar, Grid, Group } from '@mantine/core';

export default function NavMenu() {
    const { t } = useTranslation();

    return (
        <Grid w="100%">
            <Grid.Col span={9}>
                <Group>
                    <NavButton href="/">{t('home')}</NavButton>
                    <NavButton href="/cv">{t('cv')}</NavButton>
                    <NavButton href="/contacts">{t('contacts')}</NavButton>
                    <NavButton href="/publications">{t('publications')}</NavButton>
                    <NavButton href="/projects">{t('projects')}</NavButton>
                </Group>
            </Grid.Col>
            <Grid.Col span={3}>
                <nav>
                    <Group>
                        <LanguageSwitcher lang="cs"><Avatar color="blue" radius="xl">CZ</Avatar></LanguageSwitcher>
                        <LanguageSwitcher lang="en"><Avatar color="red" radius="xl">EN</Avatar></LanguageSwitcher>
                    </Group>
                </nav>
            </Grid.Col>
        </Grid>
    );
}