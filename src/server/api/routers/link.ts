import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const linkRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.link.findMany();
  }),
});
