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

type ProjectCardProps = {
    workProject: WorkProject
};

const ProjectCard: React.FC<ProjectCardProps> = ({ workProject }) => {
    const { t } = useTranslation();

    return (
        <>
            <Card shadow="sm" padding="lg" radius="md" maw={300} withBorder>
                <Card.Section>
                    <Image
                        src={workProject.imagePath}
                        height={160}
                    />
                </Card.Section>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>{workProject.name}</Text>
                    <Badge color="yellow">{workProject.year}</Badge>
                </Group>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text size="sm">{t('cv_employer') + ":"}</Text>
                    <Text size="sm" c="dimmed">{workProject.employer}</Text>
                </Group>
                <Text size="sm" c="dimmed">
                    {workProject.description}
                </Text>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text size="sm">{t('projects_tech') + ":"}</Text>
                    <Text size="sm" c="dimmed" fs="italic">{workProject.technologies}</Text>
                </Group>
                <Center>
                    <Button component="a" href={workProject.url} target="_blank">
                        <Text size="lg">{t('projects_url')}</Text>
                    </Button>
                </Center>
            </Card>
        </>
    );
}

export default ProjectCard;