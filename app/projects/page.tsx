'use client';
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import React from "react";
import project from "../data/project/projectApiService";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Group, Image, Stack, UnstyledButton, Title, Center, Flex } from "@mantine/core";

export default function Projects() {
    const { t } = useTranslation();
    const projects = project.getWorkProjectsData();

    return (
        <Stack>
            <Center><Title order={1}>{t('projects')}</Title></Center>
            <Flex gap="xl" justify="center" wrap="wrap">
                {projects.map((project, index) => (
                    <ProjectCard key={index} workProject={project} />
                ))}
            </Flex>
        </Stack>
    );
}
