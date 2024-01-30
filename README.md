This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

1. 客户端组件调用接口，文档中写的是 call route handle，实际上就是用 effect 或者是 swr 取请求接口，但是这样是不符合 seo 的，合理的做法是在客户端组件中包装一个服务端组件，服务端组件调用接口，客户端组件接受服务端组件的 props，这样既符合 seo，又符合组件复用。

2.当需要服务端组件在每次请求都刷新时，可以使用如下：

```
Opting out of Data Caching
fetch requests are not cached if:

The cache: 'no-store' is added to fetch requests.
The revalidate: 0 option is added to individual fetch requests.
The fetch request is inside a Router Handler that uses the POST method.
The fetch request comes after the usage of headers or cookies.
The const dynamic = 'force-dynamic' route segment option is used.
The fetchCache route segment option is configured to skip cache by default.
The fetch request uses Authorization or Cookie headers and there's an uncached request above it in the component tree.
```

实际上使用第一个方法即可，即在 fetch 请求中添加 cache: 'no-store' 选项。

3.shareability 分享的设置

metadata 中设置 openGraph,分享卡片会取用这些信息，如 'title', 'description', 'image'这三个信息会显示在钉钉分享的链接里面。

4.server side 中进行数据库的数据查询和获取

之前是 page 路由的时候需要使用`getServerSideProps`然后再传给组件

现在使用 app 路由直接获取数据即可，示例代码如下：

```
// `app` directory

// This function can be named anything
async function getProjects() {
  const res = await fetch(`https://...`, { cache: 'no-store' })
  const projects = await res.json()

  return projects
}

export default async function Dashboard() {
  const projects = await getProjects()

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  )
}
```

5.路由传参

`app/blog/[slug]/page.js`

```
export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}
```

6.页面传参

参考`app/blog/search-params/[slug]/page.ts`的写法

7.路由传参

这种写法可以实现类似验证 token 然后获取相关信息，然后再 redirect 到指定页面

参考`app/api/blog/route.ts`

8.orm prisma

安装

`npm install @prisma/client`

全局定义 prisma 连接对象

```
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
```

使用的时候

引入

`import prisma from '../../lib/prisma';`

```
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
};
```

参考链接 'https://vercel.com/guides/nextjs-prisma-postgres'
