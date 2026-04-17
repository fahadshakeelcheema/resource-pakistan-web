/**
 * Manus SDK - replaced by independent auth.
 * This stub exists to prevent import errors from any remaining references.
 */
export const sdk = {
  verifySession: async (_token: string | undefined | null) => null,
  createSessionToken: async (_openId: string, _opts?: { name?: string; expiresInMs?: number }) => "",
  getUserInfo: async (_accessToken: string) => ({ openId: "", name: "", email: "" }),
  exchangeCodeForToken: async (_code: string, _state: string) => ({ accessToken: "" }),
  authenticateRequest: async (_req: unknown) => null,
};
