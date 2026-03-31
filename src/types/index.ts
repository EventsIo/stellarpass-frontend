export type Plan = 'free' | 'pro';
export type Currency = 'XLM' | 'USDC';
export type EventStatus = 'draft' | 'live' | 'ended' | 'cancelled';
export type EventType = 'public' | 'invite_only';

export interface User {
  id: string;
  email: string;
  name: string;
  plan: Plan;
  walletAddress?: string;
}

export interface TicketTier {
  id: string;
  name: string;
  price: number;
  currency: Currency;
  supply: number;
  sold: number;
}

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  location: string;
  bannerUrl?: string;
  eventType: EventType;
  status: EventStatus;
  ticketSupply: number;
  tiers: TicketTier[];
  organizer: User;
}

export interface Ticket {
  id: string;
  eventId: string;
  event: Event;
  tier: string;
  walletAddress: string;
  qrCode: string;
  isCheckedIn: boolean;
  isRevoked: boolean;
  mintedAt: string;
}

export interface InviteCode {
  id: string;
  code: string;
  eventId: string;
  usedBy?: string;
  expiresAt: string;
  isUsed: boolean;
}
