'use client';
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import cv from "../data/cv";
import ExperienceTable from "./ExperienceTable";
import EducationTable from "./EducationTable";
import { Title } from '@mantine/core';
import { Center, Box } from '@mantine/core';

export default function Cv() {
    const { t } = useTranslation();
    const experiences = cv.getExperienceData();
    const educations = cv.getEducationData();

    return (
        <>
            <Center><Title order={1}>{t('cv')}</Title></Center>
            <br />
            <ExperienceTable data={experiences} />
            <EducationTable data={educations} />
        </>
    );
}

