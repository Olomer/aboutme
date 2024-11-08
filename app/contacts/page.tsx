'use client';
import { Button, Group, Image, Stack, UnstyledButton, Title, Center } from "@mantine/core";
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import { FacebookShare } from 'react-share-kit';

export default function Contacts() {
    const { t } = useTranslation();

    return (
        <Center>
            <Stack>
                <Center><Title order={1}>{t('contacts')}</Title></Center>
                <Group >
                    <UnstyledButton size={10} component="a" href="https://www.facebook.com/marek.malina.7/"><Image h={50} w="auto" src="images/facebook.png" /></UnstyledButton>
                    <UnstyledButton size={10} component="a" href="https://www.instagram.com/marek.malina/"><Image h={50} w="auto" src="images/instagram.png" /></UnstyledButton>
                    <UnstyledButton size={10} component="a" href="https://www.linkedin.com/in/marek-malina-7b5681210/"><Image h={50} w="auto" src="images/linkedin.png" /></UnstyledButton>
                    <UnstyledButton size={10} component="a" href="mailto:malina.marek@hotmail.com"><Image h={50} w="auto" src="images/email.png" /></UnstyledButton>
                </Group>
            </Stack>
        </Center>
    );
}
