'use client';
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import cv from "../data/cv/cvApiService";
import ExperienceTable from "./ExperienceTable";
import EducationTable from "./EducationTable";
import { Center, Box, Grid, Title, Space, Flex } from '@mantine/core';
import SkillTable from "./SkillTable";
import LanguageTable from "./LanguageTable";
import ActivityTable from "./ActivityTable";
import ProjectTable from "./ProjectTable";

export default function Cv() {
    const { t } = useTranslation();
    const experiences = cv.getExperienceData();
    const educations = cv.getEducationData();
    const skills = cv.getSkillData();
    const languages = cv.getLanguageData();
    const activities = cv.getActivityData();
    const projects = cv.getProjectData();

    return (
        <Flex direction="column" mx={{ md: "10%" }}>
            <Center><Title order={1}>{t('cv')}</Title></Center>
            <Space h="md" />
            <ExperienceTable data={experiences} />
            <Space h="md" />
            <EducationTable data={educations} />
            <Space h="md" />
            <SkillTable data={skills} />
            <Space h="md" />
            <LanguageTable data={languages} />
            <Space h="md" />
            <ActivityTable data={activities} />
            <Space h="md" />
            <ProjectTable data={projects} />
        </Flex>
    );
}

