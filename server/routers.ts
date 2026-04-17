import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createInquiry, getInquiries, getInquiriesByStatus, searchInquiries, updateInquiryStatus, updateInquiryNotes, getInquiryById } from "./db";
import { getInquiryAnalytics } from "./analytics";
import { sendContactFormNotification, sendAutoResponse } from "./_core/email";

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

          // Send email notification to admin
          await sendContactFormNotification({
            fullName: input.fullName,
            email: input.email,
            organization: input.organization || null,
            phone: input.phone || null,
            subject: input.subject,
            message: input.message,
          });

          // Send auto-response to submitter
          await sendAutoResponse({
            to: input.email,
            fullName: input.fullName,
            subject: input.subject,
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
    list: protectedProcedure
      .input(
        z.object({
          status: z.string().optional(),
          search: z.string().optional(),
        }).optional()
      )
      .query(async ({ ctx, input }) => {
        // Only admins can list inquiries
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
        }

        try {
          if (input?.search) {
            return await searchInquiries(input.search);
          }
          return await getInquiriesByStatus(input?.status);
        } catch (error) {
          console.error("[Get Inquiries Error]", error);
          return [];
        }
      }),
    getById: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
        }

        try {
          return await getInquiryById(input.id);
        } catch (error) {
          console.error("[Get Inquiry Error]", error);
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to fetch inquiry" });
        }
      }),
    updateStatus: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["new", "in_progress", "resolved"]),
        })
      )
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
        }

        try {
          await updateInquiryStatus(input.id, input.status);
          return { success: true };
        } catch (error) {
          console.error("[Update Inquiry Status Error]", error);
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to update status" });
        }
      }),
    updateNotes: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          adminNotes: z.string(),
        })
      )
      .mutation(async ({ ctx, input }) => {
        if (ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
        }

        try {
          await updateInquiryNotes(input.id, input.adminNotes);
          return { success: true };
        } catch (error) {
          console.error("[Update Inquiry Notes Error]", error);
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to update notes" });
        }
      }),

    // Get analytics data
    analytics: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
      }

      return await getInquiryAnalytics();
    }),
  }),
});

export type AppRouter = typeof appRouter;
