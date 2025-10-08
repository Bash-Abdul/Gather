// // lib/prisma.js
// import { PrismaClient } from "@prisma/client";

// let globalForPrisma = globalThis;

// const prisma = globalForPrisma.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.__prisma = prisma;
// }

// export default prisma;

import { PrismaClient } from '../generated/prisma';
// import { withAccelerate } from '@prisma/extension-accelerate';

const globalForPrisma = globalThis;

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient();
  // .$extends(withAccelerate());

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;