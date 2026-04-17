/**
 * LLM integration - not used in this project.
 * Stub to prevent import errors.
 */
export async function invokeLLM(_opts: { messages: { role: string; content: string }[]; response_format?: unknown }) {
  throw new Error("LLM integration is not configured in this deployment.");
}
