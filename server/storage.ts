/**
 * Simple file storage helper.
 * In independent deployment, files are stored locally.
 * For production, replace with your own S3 bucket or Cloudflare R2.
 */
import path from "path";
import fs from "fs/promises";

const UPLOAD_DIR = process.env.UPLOAD_DIR || path.join(process.cwd(), "uploads");

export async function storagePut(
  key: string,
  data: Buffer | Uint8Array | string,
  contentType?: string
): Promise<{ key: string; url: string }> {
  await fs.mkdir(UPLOAD_DIR, { recursive: true });
  const filePath = path.join(UPLOAD_DIR, key.replace(/\//g, "_"));
  await fs.writeFile(filePath, data);
  const url = `/uploads/${path.basename(filePath)}`;
  return { key, url };
}

export async function storageGet(
  key: string
): Promise<{ key: string; url: string }> {
  const filePath = path.join(UPLOAD_DIR, key.replace(/\//g, "_"));
  const url = `/uploads/${path.basename(filePath)}`;
  return { key, url };
}
