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

import connect from "@/models/connect";
import weather from "@/models/weather";
import { Suspense } from "react";

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

const getLastWeather = async (num: number) => {
  try {
    await connect();
  } catch (error) {
    if (error instanceof Error) return error;
  }

  const res = await weather.find().limit(num).sort({ spider_time: -1 });
  return res;
};

export default async function ApiBrowser() {
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

  //获取天气数据
  const weatherData = await getLastWeather(1);

  let WeeklyItems = <></>;
  if (weatherData instanceof Error) {
    WeeklyItems = <Text size="md">{weatherData.message}</Text>;
  } else {
    WeeklyItems = weatherData[0].weeklyWeatherArr.map((item: any) => {
      return (
        <div key={item.dateInfo}>
          {item.week}-{item.dateInfo}-{item.upWindTemperature}-
          {item.downWindTemperature}
        </div>
      );
    });
  }

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
          <Suspense fallback={"<>Loading</>"}>{ApiList}</Suspense>
        </SimpleGrid>
        <Divider mt={10}></Divider>
        <Box mt={20}>
          <RandomInfo></RandomInfo>
        </Box>
        <Divider mt={10}></Divider>
        <Box>
          <Nows></Nows>
        </Box>
        <Box>
          <Title order={2}>Weather</Title>
          {weatherData instanceof Array && weatherData[0].spider_time}
          {weatherData && WeeklyItems}
        </Box>
      </Container>
    </>
  );
}
