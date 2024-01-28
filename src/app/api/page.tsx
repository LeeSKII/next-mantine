import {
  Container,
  Title,
  Text,
  Box,
  SimpleGrid,
  Card,
  CardSection,
  Divider,
} from "@mantine/core";
import Link from "next/link";

import RandomInfo from "@/app/api/random-info/page";
import Nows from "@/app/api/nows/page";

type ApiItem = {
  name: string;
  src: string;
};

const apiData: ApiItem[] = [
  {
    name: "教书先生",
    src: "https://api.oioweb.cn/",
  },
  {
    name: "Uomg",
    src: "https://api.uomg.com/",
  },
  {
    name: "韩小韩",
    src: "https://api.vvhan.com/",
  },
];

export const dynamic = "force-dynamic";

export default function ApiBrowser() {
  const ApiList = apiData.map((item) => {
    return (
      <Link
        key={item.src}
        href={item.src}
        style={{ textDecorationLine: "none" }}
      >
        <Card withBorder>
          <CardSection px={10}>
            <Text size="md">{item.name}</Text>
          </CardSection>
        </Card>
      </Link>
    );
  });
  return (
    <>
      <Container size={"md"}>
        <Link href={"/"}>
          <Title order={2}>Go Back</Title>
        </Link>
        <Link href={"/api/nows"}>
          <Title order={2}>Nows</Title>
        </Link>
        <Box mt={30}>
          <Title>API Browser</Title>
        </Box>
        <SimpleGrid mt={20} cols={{ base: 1, sm: 2, md: 3 }}>
          {ApiList}
        </SimpleGrid>
        <Divider mt={10}></Divider>
        <Box mt={20}>
          <RandomInfo></RandomInfo>
        </Box>
        <Divider mt={10}></Divider>
        <Box>
          <Nows></Nows>
        </Box>
      </Container>
    </>
  );
}
