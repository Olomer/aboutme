'use client';
import React from 'react'
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import { WorkProject } from '@/app/data/project/projectApiTypes';
import { Card, Image, Text, Badge, Group, Anchor, Center, Button } from '@mantine/core';
import project from '@/app/data/project/projectApiService';
import classes from './ProjectCard.module.css';

type ProjectCardProps = {
    workProject: WorkProject
};

const ProjectCard: React.FC<ProjectCardProps> = ({ workProject }) => {
    const { t } = useTranslation();

    return (
        <>
            <Card className={classes.item} component='a' href={workProject.url} target='_blank' shadow="sm" padding="lg" radius="md" maw={300} withBorder>
                <Card.Section>
                    <Image
                        src={workProject.imagePath}
                        height={160} />
                </Card.Section>
                <Text mt="lg" fw={500}>{workProject.name}</Text>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text size="sm">{t('cv_year') + ":"}</Text>
                    <Badge color="yellow">{workProject.year}</Badge>
                </Group>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text size="sm">{t('cv_employer') + ":"}</Text>
                    <Text size="sm" c="dimmed">{workProject.employer}</Text>
                </Group>
                <Text size="sm" c="dimmed" lineClamp={6}>
                    {workProject.description}
                </Text>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text size="sm">{t('projects_tech') + ":"}</Text>
                    <Text size="sm" c="dimmed" fs="italic">{workProject.technologies}</Text>
                </Group>
            </Card>
        </>
    );
}

export default ProjectCard;