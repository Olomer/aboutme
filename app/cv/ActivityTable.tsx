
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
import { Activity } from "../data/cv/cvApiTypes";

type ActivityTableProps = {
    data: Array<Activity>;
};

const ActivityTable: React.FC<ActivityTableProps> = ({ data }) => {
    const { t } = useTranslation();

    const rows = data.map((data) => (
        <Table.Tr key={data.type}>
            <Table.Td>{data.type}</Table.Td>
            <Table.Td>{data.year}</Table.Td>
            <Table.Td>
                <TypographyStylesProvider>
                    <div dangerouslySetInnerHTML={{ __html: data.description }} />
                </TypographyStylesProvider>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <Title order={2} c="dimmed" tt="uppercase">{t('cv_activities')}</Title>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>{t('cv_type')}</Table.Th>
                        <Table.Th>{t('cv_year')}</Table.Th>
                        <Table.Th>{t('cv_description')}</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </>
    );
}

export default ActivityTable;