import { Box, Space } from "@mantine/core";

import { DoubleHeader } from "@/components/headers/DoubleHeader";
import { HeroBullets } from "@/components/hero/HeroBullets";
import { FooterLinks } from "@/components/footers/FooterLinks";
import GridTemplate from "@/widgets/GridTemplate";

import classes from "./page.module.css";

import { LinkCardProps } from "@/types/App";

const applicationUIMockData: LinkCardProps[] = [
  {
    name: "NavBars",
    num: 9,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Headers",
    num: 9,
    imgSrc: "/img/headers-light.svg",
    link: "/headers",
  },
  {
    name: "Footers",
    num: 9,
    imgSrc: "/img/footers-light.svg",
    link: "/navbars",
  },
  {
    name: "Grids",
    num: 9,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "User info and Controls",
    num: 9,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Inputs",
    num: 9,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Buttons",
    num: 9,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Sliders",
    num: 9,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Dropzones",
    num: 9,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Application Cards",
    num: 9,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Application Stats",
    num: 9,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Tables",
    num: 9,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Drag'n Drop",
    num: 9,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Carousels",
    num: 9,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
];
const pageMockData: LinkCardProps[] = [
  {
    name: "Hero headers",
    num: 6,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Feature section",
    num: 5,
    imgSrc: "/img/navbars-light.svg",
    link: "/headers",
  },
  {
    name: "Authentication",
    num: 4,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Frequently asked questions",
    num: 4,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Contact us section",
    num: 3,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Error pages",
    num: 5,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Banners",
    num: 3,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
];
const blogUIMockData: LinkCardProps[] = [
  {
    name: "Article cards",
    num: 7,
    imgSrc: "img/navbars-light.svg",
    link: "/navbars",
  },
  {
    name: "Table of contents",
    num: 2,
    imgSrc: "/img/headers-light.svg",
    link: "/headers",
  },
  {
    name: "Comments",
    num: 2,
    imgSrc: "/img/navbars-light.svg",
    link: "/navbars",
  },
];

function App() {
  return (
    <>
      <div className={classes.header}>
        <DoubleHeader></DoubleHeader>
      </div>
      <HeroBullets></HeroBullets>
      <Space id="main" h="xs"></Space>
      <Space mt={"70px"} h="md" />
      <Box>
        <GridTemplate
          title="Application UI"
          subTitle="82 components"
          data={applicationUIMockData}
        ></GridTemplate>
        <GridTemplate
          title="Page sections"
          subTitle="30 components"
          data={pageMockData}
        ></GridTemplate>
        <GridTemplate
          title="Blog UI"
          subTitle="11 components"
          data={blogUIMockData}
        ></GridTemplate>
      </Box>
      <FooterLinks></FooterLinks>
    </>
  );
}

export default App;
