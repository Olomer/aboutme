
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
import { Skill } from "../data/cv/cvApiTypes";

type SkillTableProps = {
    data: Array<Skill>;
};

const SkillsTable: React.FC<SkillTableProps> = ({ data }) => {
    const { t } = useTranslation();

    const rows = data.map((data) => (
        <Table.Tr key={data.category}>
            <Table.Td>{data.category}</Table.Td>
            <Table.Td>{data.skills}</Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <Title order={2} c="dimmed" tt="uppercase">{t('cv_skills')}</Title>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>{t('cv_category')}</Table.Th>
                        <Table.Th>{t('cv_skills')}</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </>
    );
}

export default SkillsTable;