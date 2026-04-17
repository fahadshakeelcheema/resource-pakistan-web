import { publicProcedure, router, protectedProcedure } from "./trpc";
import { TRPCError } from "@trpc/server";

export const systemRouter = router({
  notifyOwner: protectedProcedure
    .input((val: unknown) => val as { title: string; content: string })
    .mutation(async ({ input }) => {
      console.log("[System] Owner notification:", input.title);
      return { success: true };
    }),
  health: publicProcedure.query(() => ({
    status: "ok",
    timestamp: new Date().toISOString(),
  })),
});
