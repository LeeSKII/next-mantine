import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  //开启SQL日志
  return new PrismaClient({
    log: ["query", "info", "warn", "error"],
  });
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
