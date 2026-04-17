import { SignJWT, jwtVerify } from "jose";
import { ENV } from "./env";
import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import type { Request } from "express";
import * as db from "../db";
import type { User } from "../../drizzle/schema";

const getSecretKey = () => new TextEncoder().encode(ENV.cookieSecret);

/**
 * Create a signed JWT session token for a user
 */
export async function createSessionToken(userId: number, email: string): Promise<string> {
  const expirationSeconds = Math.floor((Date.now() + ONE_YEAR_MS) / 1000);
  return new SignJWT({ userId, email })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(expirationSeconds)
    .sign(getSecretKey());
}

/**
 * Verify a session token and return the payload
 */
export async function verifySessionToken(
  token: string | undefined | null
): Promise<{ userId: number; email: string } | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecretKey(), { algorithms: ["HS256"] });
    const { userId, email } = payload as Record<string, unknown>;
    if (typeof userId !== "number" || typeof email !== "string") return null;
    return { userId, email };
  } catch {
    return null;
  }
}

/**
 * Authenticate a request and return the user from DB
 */
export async function authenticateRequest(req: Request): Promise<User | null> {
  const cookieHeader = req.headers.cookie ?? "";
  const cookies = Object.fromEntries(
    cookieHeader.split(";").map(c => {
      const [k, ...v] = c.trim().split("=");
      return [k, v.join("=")];
    })
  );
  const token = cookies[COOKIE_NAME];
  const session = await verifySessionToken(token);
  if (!session) return null;

  const user = await db.getUserById(session.userId);
  return user ?? null;
}
