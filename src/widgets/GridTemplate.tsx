import { SimpleGrid, Container, Text, Title, Flex, Space } from "@mantine/core";

import LinkCard from "./LinkCard";

import { LinkCardProps } from "@/types/App";

export default function GridTemplate({
  title,
  subTitle,
  anchor,
  data,
}: {
  title: string;
  subTitle: string;
  anchor?: string;
  data: LinkCardProps[];
}) {
  const items = data.map((item) => {
    return (
      <LinkCard
        name={item.name}
        num={item.num}
        link={item.link}
        imgSrc={`${item.imgSrc}`}
      ></LinkCard>
    );
  });
  return (
    <>
      <Container mb={100} size="xl">
        <Flex align={"end"} gap={15}>
          <Title id={anchor} order={2}>
            {title}
          </Title>
          <Text fw={300}>{subTitle}</Text>
        </Flex>
        <Space h="md"></Space>
        <SimpleGrid cols={{ base: 1, xs: 2, sm: 3, md: 4 }} spacing={"xl"}>
          {items}
        </SimpleGrid>
      </Container>
    </>
  );
}
