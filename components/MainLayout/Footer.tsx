'use client';
import { Flex, Anchor, Text, Image } from '@mantine/core';

export function Footer() {
    return (
        <Flex align="center" justify="center" my={10} wrap="wrap">
            <Text size="lg">©2024 - Marek Malina (</Text>
            <Image src="images/gitlab.png" h={20} w="auto" />
            <Anchor href="https://gitlab.com/Olomer" target="_blank">
                <Text size="lg">&nbsp;Gitlab</Text>
            </Anchor>
            ,&nbsp;
            <Image src="images/github.png" h={25} w="auto" />
            <Anchor href="https://github.com/Olomer" target="_blank">
                <Text size="lg">&nbsp;Github</Text>
            </Anchor>
            <Text size="lg">)</Text>
        </Flex>
    );
};