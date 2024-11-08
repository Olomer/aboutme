
'use client';
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import { ReactNode } from 'react';
import { Experience } from '../data/cv/cvApiTypes';
import { Table } from '@mantine/core';
import { TypographyStylesProvider } from '@mantine/core';
import { Title } from '@mantine/core';
import { Text } from '@mantine/core';

type ExperienceTableProps = {
    data: Array<Experience>;
};

const ExperienceTable: React.FC<ExperienceTableProps> = ({ data }) => {
    const { t } = useTranslation();

    const rows = data.map((data) => (
        <Table.Tr key={data.year}>
            <Table.Td>{data.year}</Table.Td>
            <Table.Td>{data.position}</Table.Td>
            <Table.Td>{data.employer}</Table.Td>
            <Table.Td>
                <TypographyStylesProvider>
                    <div dangerouslySetInnerHTML={{ __html: data.text }} />
                </TypographyStylesProvider>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <Title order={2} c="dimmed" tt="uppercase">{t('cv_experience')}</Title>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>{t('cv_year')}</Table.Th>
                        <Table.Th>{t('cv_position')}</Table.Th>
                        <Table.Th>{t('cv_employer')}</Table.Th>
                        <Table.Th>{t('cv_content')}</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </>
    );
}

export default ExperienceTable;