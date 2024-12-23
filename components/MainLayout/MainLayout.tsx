
'use client';
import { Anchor, AppShell, Burger, Group, NavLink, UnstyledButton } from "@mantine/core";
import { ReactNode } from 'react';
import { useDisclosure } from "@mantine/hooks";
import classes from './MainLayout.module.css';
import {
    useTranslation,
    LanguageSwitcher,
    LinkWithLocale
} from "next-export-i18n";
import Link from 'next/link';
import NavButton from "./NavButton";
import NavMenu from "./NavMenu";
import NavMenuMobile from "./NavMenuMobile";
import { Footer } from "./Footer";

type NavbarProps = {
    children: ReactNode;
};

const MainLayout: React.FC<NavbarProps> = ({ children }) => {
    const { t } = useTranslation();
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <Group justify="space-between" style={{ flex: 1 }}>
                        {/* <MantineLogo size={30} /> */}
                        <Group ml="xl" visibleFrom="sm" w="100%">
                            <NavMenu />
                        </Group>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar py="md" px={4}>
                <NavMenuMobile onClose={toggle} />
            </AppShell.Navbar>

            <AppShell.Main pb={130}>
                {children}
            </AppShell.Main>
            <AppShell.Footer>
                <Footer />
            </AppShell.Footer>
        </AppShell>
    );
}

export default MainLayout;