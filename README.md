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

页面传参默认的数据类型是`{ params: {}, searchParams: {} }`

typescript 的写法

```
export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
})
```

7.路由传参

这种写法可以实现类似验证 token 然后获取相关信息，然后再 redirect 到指定页面

参考`app/api/blog/route.ts`

8.orm prisma

参考文档：'https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases-typescript-mysql'

8.1 首先安装开发依赖

`npm install prisma --save-dev`

8.2 初始化 schema 文件

`npx prisma init`

8.3 修改配置文件`schema.prisma`，连接数据库

```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

通常情况下可以使用环境变量，修改`.env`文件

```
DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/mydb"
```

8.4 将数据库对应的 schema 结构拉下来

`npx prisma db pull`

8.5 安装 prisma client

`npm install @prisma/client`

8.6 生成 prisma 模型

`npx prisma generate`

注意的是，在每次执行完`npx prisma db pull`之后，都需要执行`npx prisma generate`，否则会报错

8.7 开始查询

8.8 问题

在 VsCode 中 prisma 报错`Cannot find module '@prisma/client' or its corresponding type declarations.` 不会影响使用；

在 Next.js 中使用可以参考官网的客户端写法

`lib/prisma.ts`

```
import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;

```

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

9. Image 在 Next.js 中的使用

9.1 Responsive image using a static import 设置图片的响应式尺寸

If the source image is not dynamic, you can statically import to create a responsive image:

```
import Image from 'next/image'
import me from '../photos/me.jpg'

export default function Author() {
  return (
    <Image
      src={me}
      alt="Picture of the author"
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
    />
  )
}
```

参考链接：'https://nextjs.org/docs/app/api-reference/components/image'
