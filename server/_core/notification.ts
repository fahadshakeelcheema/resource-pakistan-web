/**
 * Owner notification - logs to console in independent deployment.
 * Can be extended to send email notifications via Resend.
 */
export type NotificationPayload = {
  title: string;
  content: string;
};

export async function notifyOwner(payload: NotificationPayload): Promise<boolean> {
  console.log("[Notification] Owner notification:", payload.title);
  console.log("[Notification] Content:", payload.content.substring(0, 200));
  return true;
}
