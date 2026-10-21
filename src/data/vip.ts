/*
  VIP program = the ROADSIDE app by CONVINI, Inc. (www.convini.live).
  Plan names, prices and allowances copied from the live app on 2026-10-21.
  CONVINI sets these; re-check the app before changing any figure here.
*/
export const CONVINI = {
  company: "CONVINI, Inc.",
  app: "ROADSIDE",
  url: "https://www.convini.live",
  checked: "October 21, 2026",
};

export interface VipTier {
  name: string;
  monthly: number;
  annual: number;
  tows: number;
  towMiles: number;
  assists: number;
  blurb: string;
  popular?: boolean;
}

export const VIP_TIERS: VipTier[] = [
  { name: "Bronze", monthly: 9, annual: 99, tows: 1, towMiles: 5, assists: 1, blurb: "A starter safety net for a car that rarely lets you down." },
  { name: "Silver", monthly: 19, annual: 209, tows: 2, towMiles: 10, assists: 2, blurb: "For daily commuters who put real miles on the car.", popular: true },
  { name: "Gold", monthly: 29, annual: 319, tows: 3, towMiles: 20, assists: 3, blurb: "Longer included tows for drivers who cover the suburbs." },
  { name: "Platinum", monthly: 39, annual: 429, tows: 4, towMiles: 30, assists: 4, blurb: "The most tows and the longest included distance." },
];
