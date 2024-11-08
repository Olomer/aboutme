
'use client';
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import { ReactNode } from 'react';
import { Table } from '@mantine/core';
import { TypographyStylesProvider } from '@mantine/core';
import { Title } from '@mantine/core';
import { Text } from '@mantine/core';
import { Project } from "../data/cv/cvApiTypes";

type ProjectTableProps = {
    data: Array<Project>;
};

const ProjectTable: React.FC<ProjectTableProps> = ({ data }) => {
    const { t } = useTranslation();

    const rows = data.map((data) => (
        <Table.Tr key={data.id}>
            <Table.Td>{data.type}</Table.Td>
            <Table.Td>{data.id}</Table.Td>
            <Table.Td>{data.year}</Table.Td>
            <Table.Td>{data.name}</Table.Td>
            <Table.Td>
                <TypographyStylesProvider>
                    <div dangerouslySetInnerHTML={{ __html: data.text }} />
                </TypographyStylesProvider>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <Title order={2} c="dimmed" tt="uppercase">{t('cv_projects')}</Title>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>{t('cv_type')}</Table.Th>
                        <Table.Th>{t('cv_id')}</Table.Th>
                        <Table.Th>{t('cv_year')}</Table.Th>
                        <Table.Th>{t('cv_name')}</Table.Th>
                        <Table.Th>{t('cv_content')}</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </>
    );
}

export default ProjectTable;