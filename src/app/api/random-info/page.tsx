import Image from "next/image";
import { Text, Box, Title, Center } from "@mantine/core";

const mockData = [
  {
    id: 101270,
    name: "艾莲",
    icon: "https://bbs-static.miyoushe.com/static/2023/11/03/060c8ba17ff372078dcf62d4d8b46d28_7229548510559384850.png",
    sort_order: 1,
    status: "published",
  },
  {
    id: 101269,
    name: "丽娜",
    icon: "https://bbs-static.miyoushe.com/static/2023/11/03/6ce65ace05f501e8f6af3616dea1c634_1107629373726729394.png",
    sort_order: 2,
    status: "published",
  },
  {
    id: 101268,
    name: "格莉丝",
    icon: "https://bbs-static.miyoushe.com/static/2023/11/03/566be0fa7ad1f56d6fe1f0e540a57088_2343129702194085131.png",
    sort_order: 3,
    status: "published",
  },
  {
    id: 100814,
    name: "雅-米游社",
    icon: "https://upload-bbs.miyoushe.com/upload/2022/11/17/58da7a2a8695222efb9d42b750734b08_8280567314882516916.png",
    sort_order: 4,
    status: "published",
  },
  {
    id: 100788,
    name: "cangjiao",
    icon: "https://upload-bbs.miyoushe.com/upload/2022/11/03/7c4fb6e617c03446271ee2c079fcde9d_6776079515185585182.png",
    sort_order: 5,
    status: "published",
  },
  {
    id: 100758,
    name: "B-本",
    icon: "https://upload-bbs.miyoushe.com/upload/2022/09/16/dcc037ac974c246c6cf9d03837ba039a_1078439170267827504.png",
    sort_order: 6,
    status: "published",
  },
  {
    id: 100748,
    name: "安东",
    icon: "https://upload-bbs.miyoushe.com/upload/2022/09/02/120783c314afef047e42c868f317295e_6590491424730429361.jpg",
    sort_order: 7,
    status: "published",
  },
  {
    id: 100730,
    name: "K-珂蕾妲",
    icon: "https://upload-bbs.miyoushe.com/upload/2022/08/19/c5789e600918b11b6f06b8ce32fd928f_5519968878441380032.jpg",
    sort_order: 8,
    status: "published",
  },
  {
    id: 100688,
    name: "莱卡恩",
    icon: "https://upload-bbs.miyoushe.com/upload/2022/07/22/0a713331e7fbc4e259c0d2fcd39d2251_5750577311608837910.png",
    sort_order: 9,
    status: "published",
  },
  {
    id: 100682,
    name: "可琳",
    icon: "https://bbs-static.miyoushe.com/communityweb/upload/1cc889fcba3e2686d6cce7c90d8ed5a4.png",
    sort_order: 10,
    status: "published",
  },
  {
    id: 100670,
    name: "猫又",
    icon: "https://bbs-static.miyoushe.com/communityweb/upload/f267c454e0ad69d2a252e95d5b7e3045.png",
    sort_order: 11,
    status: "published",
  },
  {
    id: 100656,
    name: "男主",
    icon: "https://bbs-static.miyoushe.com/communityweb/upload/a7f9e0b102854d1293670a8d4d237993.png",
    sort_order: 12,
    status: "published",
  },
  {
    id: 100657,
    name: "女主",
    icon: "https://bbs-static.miyoushe.com/communityweb/upload/3f6dcc867a2bf1b6a91f86f59ca3a9c8.png",
    sort_order: 13,
    status: "published",
  },
  {
    id: 100638,
    name: "11号",
    icon: "https://bbs-static.miyoushe.com/communityweb/upload/ad850eb59590e713c59056666431479e.png",
    sort_order: 14,
    status: "published",
  },
  {
    id: 100617,
    name: "比利",
    icon: "https://bbs-static.miyoushe.com/communityweb/upload/82b1971538505baa318d7f9bc7bc8efe.png",
    sort_order: 15,
    status: "published",
  },
  {
    id: 100604,
    name: "妮可",
    icon: "https://bbs-static.miyoushe.com/communityweb/upload/2bc2b2d939ee7d3cc5bbfcc2b687a6d1.png",
    sort_order: 16,
    status: "published",
  },
  {
    id: 100594,
    name: "安比",
    icon: "https://bbs-static.miyoushe.com/communityweb/upload/56dee02b8e79479f1d9256e56b95552c.png",
    sort_order: 18,
    status: "published",
  },
];

// 强制每次路由进入都动态刷新
export const dynamic = "force-dynamic";

export default function RandomInfo() {
  const selected = Math.random() * mockData.length;
  const data = mockData[parseInt(selected.toString())];
  return (
    <>
      <Center>
        <Box>
          <Title order={2}>米游社随机头像</Title>
          <Text size="md" fw={700}>
            {" "}
            {data.name}
          </Text>

          <Image
            src={data.icon}
            alt={data.name}
            width={200}
            height={200}
          ></Image>
        </Box>
      </Center>
    </>
  );
}
