import { getDb } from "./db";
import { inquiries } from "../drizzle/schema";
import { sql, count, and, gte, lte } from "drizzle-orm";

export type AnalyticsData = {
  totalInquiries: number;
  newInquiries: number;
  inProgressInquiries: number;
  resolvedInquiries: number;
  averageResponseTime: number | null;
  submissionsThisWeek: number;
  submissionsThisMonth: number;
  categoryDistribution: { category: string; count: number }[];
  weeklyTrend: { week: string; count: number }[];
};

/**
 * Get comprehensive analytics data for admin dashboard
 */
export async function getInquiryAnalytics(): Promise<AnalyticsData> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  // Get total counts by status
  const statusCounts = await db
    .select({
      status: inquiries.status,
      count: count(),
    })
    .from(inquiries)
    .groupBy(inquiries.status);

  const totalInquiries = statusCounts.reduce((sum: number, item: any) => sum + item.count, 0);
  const newInquiries = statusCounts.find((s: any) => s.status === "new")?.count || 0;
  const inProgressInquiries = statusCounts.find((s: any) => s.status === "in_progress")?.count || 0;
  const resolvedInquiries = statusCounts.find((s: any) => s.status === "resolved")?.count || 0;

  // Calculate average response time (time from creation to first status change)
  // For simplicity, we'll calculate time from creation to resolved status
  const resolvedItems = await db
    .select({
      createdAt: inquiries.createdAt,
      updatedAt: inquiries.updatedAt,
    })
    .from(inquiries)
    .where(sql`${inquiries.status} = 'resolved'`);

  let averageResponseTime: number | null = null;
  if (resolvedItems.length > 0) {
    const totalResponseTime = resolvedItems.reduce((sum: number, item: any) => {
      const created = new Date(item.createdAt).getTime();
      const updated = new Date(item.updatedAt).getTime();
      return sum + (updated - created);
    }, 0);
    averageResponseTime = totalResponseTime / resolvedItems.length / (1000 * 60 * 60); // Convert to hours
  }

  // Get submissions this week
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  
  const weeklySubmissions = await db
    .select({ count: count() })
    .from(inquiries)
    .where(gte(inquiries.createdAt, oneWeekAgo));
  
  const submissionsThisWeek = weeklySubmissions[0]?.count || 0;

  // Get submissions this month
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  
  const monthlySubmissions = await db
    .select({ count: count() })
    .from(inquiries)
    .where(gte(inquiries.createdAt, oneMonthAgo));
  
  const submissionsThisMonth = monthlySubmissions[0]?.count || 0;

  // Get category distribution (based on subject keywords)
  const allInquiries = await db.select({ subject: inquiries.subject }).from(inquiries);
  
  const categoryMap: Record<string, number> = {
    Mining: 0,
    Consultancy: 0,
    Partnership: 0,
    Technology: 0,
    Governance: 0,
    General: 0,
  };

  allInquiries.forEach((inquiry: any) => {
    const subject = inquiry.subject.toLowerCase();
    if (subject.includes("mining") || subject.includes("mineral") || subject.includes("resource")) {
      categoryMap.Mining++;
    } else if (subject.includes("consult") || subject.includes("advisory") || subject.includes("strategy")) {
      categoryMap.Consultancy++;
    } else if (subject.includes("partner") || subject.includes("collaboration") || subject.includes("joint")) {
      categoryMap.Partnership++;
    } else if (subject.includes("technology") || subject.includes("ev") || subject.includes("electric")) {
      categoryMap.Technology++;
    } else if (subject.includes("governance") || subject.includes("policy") || subject.includes("compliance")) {
      categoryMap.Governance++;
    } else {
      categoryMap.General++;
    }
  });

  const categoryDistribution = Object.entries(categoryMap).map(([category, count]) => ({
    category,
    count,
  }));

  // Get weekly trend for last 8 weeks
  const weeklyTrend: { week: string; count: number }[] = [];
  for (let i = 7; i >= 0; i--) {
    const weekStart = new Date();
    weekStart.setDate(weekStart.getDate() - (i * 7));
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 7);

    const weekSubmissions = await db
      .select({ count: count() })
      .from(inquiries)
      .where(
        and(
          gte(inquiries.createdAt, weekStart),
          lte(inquiries.createdAt, weekEnd)
        )
      );

    weeklyTrend.push({
      week: `Week ${8 - i}`,
      count: weekSubmissions[0]?.count || 0,
    });
  }

  return {
    totalInquiries,
    newInquiries,
    inProgressInquiries,
    resolvedInquiries,
    averageResponseTime,
    submissionsThisWeek,
    submissionsThisMonth,
    categoryDistribution,
    weeklyTrend,
  };
}
