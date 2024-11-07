
'use client';
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import { ReactNode } from 'react';
import { Education } from '../data/cv';
import { Table } from '@mantine/core';
import { TypographyStylesProvider } from '@mantine/core';
import { Title } from '@mantine/core';
import { Text } from '@mantine/core';

type EducationTableProps = {
    data: Array<Education>;
};

const EducationTable: React.FC<EducationTableProps> = ({ data }) => {
    const { t } = useTranslation();

    const rows = data.map((data) => (
        <Table.Tr key={data.year}>
            <Table.Td>{data.year}</Table.Td>
            <Table.Td>{data.field}</Table.Td>
            <Table.Td>{data.school}</Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <Title order={2} c="dimmed" tt="uppercase">{t('cv_education')}</Title>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>{t('cv_year')}</Table.Th>
                        <Table.Th>{t('cv_field_of_study')}</Table.Th>
                        <Table.Th>{t('cv_school')}</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </>
    );
}

export default EducationTable;