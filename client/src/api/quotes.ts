import { request } from './client';
import type { QuoteRequest } from './types';

export const QUOTE_FIELDS = ['company_name', 'first_name', 'last_name', 'email', 'phone', 'address', 'message'] as const;

export type QuoteField = (typeof QUOTE_FIELDS)[number];

export async function sendQuoteRequest(quote: QuoteRequest, signal?: AbortSignal): Promise<void> {
  await request<unknown>('/quote_requests/request/', { method: 'POST', body: quote, signal });
}
