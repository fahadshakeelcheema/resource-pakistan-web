export const ENV = {
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  isProduction: process.env.NODE_ENV === "production",
  adminEmail: process.env.ADMIN_EMAIL ?? "info@resourcepakistan.com",
  resendApiKey: process.env.RESEND_API_KEY ?? "",
  senderEmail: process.env.SENDER_EMAIL ?? "noreply@resourcepakistan.com",
  appUrl: process.env.APP_URL ?? "http://localhost:3000",
};
