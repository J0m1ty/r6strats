export const attackerGadgets = ["Breach Charge", "Hard Breach Charge", "Claymore", "Frag Grenade", "Smoke Grenade", "Stun Grenade", "Impact EMP Grenade"] as const;
export const defenderGadgets = ["Barbed Wire", "Bulletproof Camera", "Deployable Shield", "Impact Grenade", "Nitro Cell", "Proximity Alarm", "Observation Blocker"] as const;
export type AttackerGadget = typeof attackerGadgets[number];
export type DefenderGadget = typeof defenderGadgets[number];