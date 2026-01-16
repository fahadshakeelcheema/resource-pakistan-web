import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createInquiry, getInquiries } from "./db";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  inquiries: router({
    submit: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(1, "Full name is required"),
          organization: z.string().optional(),
          email: z.string().email("Valid email is required"),
          phone: z.string().optional(),
          subject: z.string().min(1, "Subject is required"),
          message: z.string().min(10, "Message must be at least 10 characters"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const result = await createInquiry({
            fullName: input.fullName,
            organization: input.organization || null,
            email: input.email,
            phone: input.phone || null,
            subject: input.subject,
            message: input.message,
            status: "new",
          });

          // Notify owner of new inquiry
          await notifyOwner({
            title: "New Inquiry from Resource Pakistan Website",
            content: `New inquiry from ${input.fullName} (${input.email})\n\nSubject: ${input.subject}\n\nMessage: ${input.message}`,
          });

          return {
            success: true,
            message: "Your inquiry has been submitted successfully. We will respond within 2-3 business days.",
          };
        } catch (error) {
          console.error("[Inquiry Submission Error]", error);
          throw new Error("Failed to submit inquiry. Please try again.");
        }
      }),
    list: publicProcedure.query(async () => {
      try {
        return await getInquiries();
      } catch (error) {
        console.error("[Get Inquiries Error]", error);
        return [];
      }
    }),
  }),
});

export type AppRouter = typeof appRouter;
