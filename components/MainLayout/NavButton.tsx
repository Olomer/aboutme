import { UnstyledButton } from "@mantine/core";
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
        <UnstyledButton className={classes.control}><Link href={href} style={{ textDecoration: 'none', color: 'inherit' }}>{children}</Link></UnstyledButton>
    );
}

export default NavButton;