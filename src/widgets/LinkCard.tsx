import { Card, CardSection, Image, Space, Text } from "@mantine/core";
import Link from "next/link";

import { LinkCardProps } from "@/types/App";

import classes from "./LinkCard.module.css";

export default function LinkCard({ name, num, link, imgSrc }: LinkCardProps) {
  return (
    <Link className={classes.card_link} href={link}>
      <Card shadow="sm" padding="xl" className={classes.card} withBorder>
        <CardSection px={"xs"} style={{ backgroundColor: "#F8F9FA" }}>
          <Image px={"sm"} src={imgSrc} h={160} alt="" />
        </CardSection>

        <Text fw={500} mt={"xl"} size="md">
          {name}
        </Text>
        <Space h={"2px"}></Space>
        <Text fw={200} c="dimmed" size="xs">
          {num} Components
        </Text>
      </Card>
    </Link>
  );
}
