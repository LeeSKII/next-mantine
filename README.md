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
