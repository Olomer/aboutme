'use client';
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import cv from "../data/cv/cvApiService";
import ExperienceTable from "./ExperienceTable";
import EducationTable from "./EducationTable";
import { Title } from '@mantine/core';
import { Center, Box } from '@mantine/core';
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
        <>
            <Center><Title order={1}>{t('cv')}</Title></Center>
            <br />
            <ExperienceTable data={experiences} />
            <br />
            <EducationTable data={educations} />
            <br />
            <SkillTable data={skills} />
            <br />
            <LanguageTable data={languages} />
            <br />
            <ActivityTable data={activities} />
            <br />
            <ProjectTable data={projects} />
        </>
    );
}

