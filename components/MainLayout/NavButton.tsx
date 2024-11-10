import { UnstyledButton, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import { ReactNode } from "react";
import classes from './MainLayout.module.css';

type NavbarButtonProps = {
    href: string;
    children: ReactNode;
};

const NavButton: React.FC<NavbarButtonProps> = ({ href, children }) => {
    return (
        <Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
            <UnstyledButton py={10} w="100%" className={classes.control}><Text size="lg">{children}</Text></UnstyledButton>
        </Link>
    );
}

export default NavButton;