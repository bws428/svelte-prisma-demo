import { PrismaClient } from "@prisma/client";

// for development, due to hot-reload nuisance bugs
// see: https://www.youtube.com/watch?v=E9J2VXd-bzE
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") {
  global.prisma = prisma;
}

export { prisma };
