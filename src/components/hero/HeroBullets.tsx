import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ListItem,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "../../../public/image.svg";
import classes from "./HeroBullets.module.css";
import Link from "next/link";

export function HeroBullets() {
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> React <br />{" "}
            components library
          </Title>
          <Text c="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever
            – Mantine includes more than 120 customizable components and hooks
            to cover you in any situation
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <ListItem>
              <b>TypeScript based</b> – build type safe applications, all
              components and hooks export types
            </ListItem>
            <ListItem>
              <b>Free and open source</b> – all packages have MIT license, you
              can use Mantine in any project
            </ListItem>
            <ListItem>
              <b>No annoying focus ring</b> – focus ring will appear only when
              user navigates with keyboard
            </ListItem>
          </List>

          <Group mt={30}>
            <Link href="/headers">
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
            </Link>

            <Link href="/api">
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Api Browser
              </Button>
            </Link>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}
