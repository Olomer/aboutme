
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
import { Language } from "../data/cv/cvApiTypes";

type LanguageTableProps = {
    data: Array<Language>;
};

const SkillsTable: React.FC<LanguageTableProps> = ({ data }) => {
    const { t } = useTranslation();

    const rows = data.map((data) => (
        <Table.Tr key={data.language}>
            <Table.Td>{data.language}</Table.Td>
            <Table.Td>{data.expertise}</Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <Title order={2} c="dimmed" tt="uppercase">{t('cv_languages')}</Title>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>{t('cv_language')}</Table.Th>
                        <Table.Th>{t('cv_expertise')}</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </>
    );
}

export default SkillsTable;