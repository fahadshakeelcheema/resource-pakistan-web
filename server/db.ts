import { eq, desc, or, like } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { InsertUser, users, InsertInquiry, inquiries } from "../drizzle/schema";

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function createUser(data: { name: string; email: string; passwordHash: string }) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(users).values({
    name: data.name,
    email: data.email,
    passwordHash: data.passwordHash,
    lastSignedIn: new Date(),
  }).returning();
  return result[0];
}

export async function getUserByEmail(email: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function updateUserLastSignedIn(id: number) {
  const db = await getDb();
  if (!db) return;
  await db.update(users).set({ lastSignedIn: new Date() }).where(eq(users.id, id));
}

export async function createInquiry(inquiry: InsertInquiry) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(inquiries).values(inquiry).returning();
  return result[0];
}

export async function getInquiries() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
}

export async function getInquiriesByStatus(status?: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  if (status && status !== "all") {
    return db.select().from(inquiries).where(eq(inquiries.status, status as any)).orderBy(desc(inquiries.createdAt));
  }
  return db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
}

export async function searchInquiries(searchTerm: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  return db.select().from(inquiries).where(
    or(
      like(inquiries.fullName, `%${searchTerm}%`),
      like(inquiries.email, `%${searchTerm}%`),
      like(inquiries.organization, `%${searchTerm}%`),
      like(inquiries.subject, `%${searchTerm}%`)
    )
  ).orderBy(desc(inquiries.createdAt));
}

export async function updateInquiryStatus(id: number, status: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(inquiries).set({ status: status as any, updatedAt: new Date() }).where(eq(inquiries.id, id));
}

export async function updateInquiryNotes(id: number, adminNotes: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(inquiries).set({ adminNotes, updatedAt: new Date() }).where(eq(inquiries.id, id));
}

export async function getInquiryById(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.select().from(inquiries).where(eq(inquiries.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}
