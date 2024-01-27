"use client";
import { DoubleHeader } from "@/components/headers/DoubleHeader";
import { HeaderMegaMenu } from "./HeaderMegaMenu";
import { HeaderMenu } from "@/components/headers/HeaderMenu";
import { HeaderSearch } from "@/components/headers/HeaderSearch";
import { HeaderSimple } from "@/components/headers/HeaderSimple";
import { HeaderTabs } from "@/components/headers/HeaderTabs";
import { Container, Title } from "@mantine/core";
import classes from "./Headers.module.css";

import Link from "next/link";

export default function Headers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container size={"md"}>
        {children}
        <Title>
          <Link href="/#main">Back to all categories</Link>
        </Title>
        <Title order={1} className={classes.header}>
          Headers
        </Title>
        <Title order={2}>Header with multiple layers</Title>
        <DoubleHeader></DoubleHeader>
        <Title order={2}>Header with mega menu</Title>
        <HeaderMegaMenu></HeaderMegaMenu>
        <Title order={2}>Header with menus</Title>
        <HeaderMenu></HeaderMenu>
        <Title order={2}>Header with search</Title>
        <HeaderSearch></HeaderSearch>
        <Title order={2}>Simple header</Title>
        <HeaderSimple></HeaderSimple>
        <Title order={2}>Header with tabs</Title>
        <HeaderTabs></HeaderTabs>
      </Container>
    </>
  );
}
