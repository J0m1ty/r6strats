import { AttackerGadget, DefenderGadget } from "./gadgetInfo";
import { map } from "./mapInfo";
import { WeaponData } from "./weaponInfo";

export type OperatorType = "attacker" | "defender";

export type OperatorSpecialty = "INTEL" | "MAP CONTROL" | "ANTI-ENTRY" | "ANTI-GADGET" | "BREACH" | "TRAPPER" | "CROWD CONTROL" | "SUPPORT" | "FRONT LINE";

export type Gadget = "frag-grenade" | "hard-breach-charge" | "smoke-grenade" | "stun-grenade" | "claymore" | "impact-emp" | "breach-charge"

export type OperatorElement = {
    data: OperatorData<OperatorPosition>;
    shown: boolean;
};

export type OperatorPosition = "attacker" | "defender";

export const operatorNames = ["sledge", "thatcher", "ash", "thermite", "twitch", "montagne", "glaz", "fuze", "blitz", "iq", "Buck", "blackbeard", "capitao", "hibana", "jackal", "ying", "zofia", "dokkaebi", "lion", "finka", "maverick", "nomad", "gridlock", "nokk", "amaru", "kali", "iana", "ace", "zero", "flores", "osa", "sens", "grim", "brava", "ram", "deimos", "smoke", "mute", "castle", "pulse", "doc", "rook", "kapkan", "tachanka", "jager", "bandit", "frost", "valkyrie", "caveira", "echo", "mira", "lesion", "ela", "vigil", "alibi", "maestro", "clash", "kaid", "mozzie", "warden", "goyo", "wamai", "oryx", "melusi", "aruni", "thunderbird", "thorn", "azami", "solis", "fenrir", "tubarao"] as const;
export type OperatorName = typeof operatorNames[number];

export const attackerSpecialties = ["INTEL", "MAP CONTROL", "ANTI-GADGET", "BREACH", "SUPPORT", "FRONT LINE"] as const;
export const defenderSpecialties = ["INTEL", "ANTI-ENTRY", "ANTI-GADGET", "TRAPPER", "CROWD CONTROL", "SUPPORT"] as const;
export type AttackerSpecialty = typeof attackerSpecialties[number];
export type DefenderSpecialty = typeof defenderSpecialties[number];

export type OperatorData<T extends OperatorPosition> = {
    name: OperatorName;
    type: T;
    specialties: T extends "attacker" ? AttackerSpecialty[] : T extends "defender" ? DefenderSpecialty[] : never;
    primary: WeaponData[];
    secondary: WeaponData[];
    gadgets: T extends "attacker" ? AttackerGadget[] : T extends "defender" ? DefenderGadget[] : never;
    speed: 1 | 2 | 3;
    armor: 1 | 2 | 3;
};

const attackers: OperatorData<OperatorType>[] = [

    //Attackers

    {
        badge: "operators/badges/deimos.png",
        name: "deimos",
        specialties: ["INTEL", "MAP CONTROL"],
        gadgets: ["Frag Grenade", "Hard Breach Charge"],
        type: "attacker",
        primary: [],
        secondary: [],
        gadgets: [],
        speed: 1,
        armor: 2
    },
    {
        name: "ram",
        type: "attacker",
        specialties: ["BREACH"],
        gadgets: ["Smoke Grenade", "Stun Grenade"]
    },
    {
        name: "brava",
        type: "attacker",
        specialties: ["INTEL", "ANTI-GADGET"],
        gadgets: ["Smoke Grenade", "Claymore"]
    },
    {
        name: "grim",
        type: "attacker",
        specialties: ["FRONT LINE", "MAP CONTROL"],
        gadgets: ["Impact EMP Grenade", "Claymore", "Hard Breach Charge"]
    },
    {
        name: "sens",
        type: "attacker",
        specialties: ["SUPPORT", "MAP CONTROL"],
        gadgets: ["hard-breach-charge", "claymore", "frag-grenade"]
    },
    {
        name: "osa",
        type: "attacker",
        specialties: ["INTEL", "SUPPORT"],
        gadgets: ["frag-grenade", "claymore", "impact-emp"]
    },
    {
        name: "flores",
        type: "attacker",
        specialties: ["ANTI-GADGET","INTEL"],
        gadgets: ["claymore", "stun-grenade"]
    },
    {
        name: "zero",
        type: "attacker",
        specialties: ["ANTI-GADGET","INTEL"],
        gadgets: ["claymore", "hard-breach-charge"]
    },
    {
        name: "ace",
        type: "attacker",
        specialties: ["BREACH","ANTI-GADGET"],
        gadgets: ["breach-charge", "claymore"]
    },
    {
        name: "iana",
        type: "attacker",
        specialties: ["FRONT LINE" , "INTEL"],
        gadgets: ["impact-emp", "smoke-grenade"]
    },
    {
        name: "kali",
        type: "attacker",
        specialties: ["ANTI-GADGET" , "SUPPORT"],
        gadgets: ["breach-charge", "claymore"]
    },
    {
        name: "amaru",
        type: "attacker",
        specialties: ["FRONT LINE" , "MAP CONTROL"],
        gadgets: []
    },
    {
        name: "nokk",
        type: "attacker",
        specialties: ["FRONT LINE" , "MAP CONTROL"]
    },
    {
        name: "gridlock",
        type: "attacker",
        specialties: ["SUPPORT" , "MAP CONTROL"]
    },
    {
        name: "nomad",
        type: "attacker",
        specialties: ["FRONT LINE" , "MAP CONTROL"]
    },
    {
        name: "maverick",
        type: "attacker",
        specialties: ["BREACH" , "FRONT LINE"]
    },
    {
        name: "lion",
        type: "attacker",
        specialties: ["INTEL" , "MAP CONTROL"]
    },
    {
        name: "zofia",
        type: "attacker",
        specialties: ["BREACH" , "ANTI-GADGET"]
    },
    {
        name: "ying",
        type: "attacker",
        specialties: ["FRONT LINE" , "MAP CONTROL"]
    },
    {
        name: "jackal",
        type: "attacker",
        specialties: ["INTEL" , "MAP CONTROL"]
    },
    {
        name: "capitao",
        type: "attacker",
        specialties: ["FRONT LINE" , "MAP CONTROL"]
    },
    {
        name: "blackbeard",
        type: "attacker",
        specialties: ["SUPPORT"]
    },
    {
        name: "buck",
        type: "attacker",
        specialties: ["BREACH" , "SUPPORT"]
    },
    {
        name: "sledge",
        type: "attacker",
        specialties: ["BREACH" , "ANTI-GADGET"]
    },
    {
        name: "thatcher",
        type: "attacker",
        specialties: ["ANTI-GADGET" , "SUPPORT"]
    },
    {
        name: "ash",
        type: "attacker",
        specialties: ["BREACH" , "FRONT LINE"]
    },
    {
        name: "thermite",
        type: "attacker",
        specialties: ["BREACH" , "SUPPORT"]
    },
    {
        name: "montagne",
        type: "attacker",
        specialties: ["INTEL" , "SUPPORT"]
    },
    {
        name: "twitch",
        type: "attacker",
        specialties: ["ANTI-GADGET" , "INTEL"]
    },
    {
        name: "iq",
        type: "attacker",
        specialties: ["INTEL" , "SUPPORT"]
    },
    {
        name: "fuze",
        type: "attacker",
        specialties: ["ANTI-GADGET"]
    },
    {
        name: "glaz"
        type: "attacker",
        specialties: ["INTEL" , "SUPPORT"]
    },

    //Defenders

    {
        name: "tubarao",
        type: "defender",
        specialties: ["ANTI-ENTRY", "ANTI-GADGET"]
    },
    {
        name: "fenrir",
        type: "defender",
        specialties: ["TRAPPER", "CROWD CONTROL"]
    },
    {
        name: "solis",
        type: "defender",
        specialties: ["INTEL", "SUPPORT"]
    },
    {
        name: "azami",
        type: "defender",
        specialties: ["ANTI-ENTRY", "SUPPORT"]
    },
    {
        name: "thorn",
        type: "defender",
        specialties: ["ANTI-ENTRY", "TRAPPER"]
    },
    {
        name: "thunderbird",
        type: "defender",
        specialties: ["SUPPORT"]
    },
    {
        name: "aruni",
        type: "defender",
        specialties: ["ANTI-ENTRY", "ANTI-GADGET"]
    },
    {
        name: "melusi",
        type: "defender",
        specialties: ["INTEL", "CROWD CONTROL"]
    },
    {
        name: "oryx",
        type: "defender",
        specialties: ["SUPPORT"]
    },
    {
        name: "wamai",
        type: "defender",
        specialties: ["ANTI-GADGET", "TRAPPER"]
    },
    {
        name: "goyo",
        type: "defender",
        specialties: ["ANTI-ENTRY", "TRAPPER"]
    },
    {
        name: "warden",
        type: "defender",
        specialties: ["ANTI-GADGET", "INTEL"]
    },
    {
        name: "kaid",
        type: "defender",
        specialties: ["ANTI-ENTRY", "ANTI-GADGET"]
    },
    {
        name: "clash",
        type: "defender",
        specialties: ["INTEL", "CROWD CONTROL"]
    },
    {
        name: "maestro",
        type: "defender",
        specialties: ["ANTI-GADGET", "INTEL"]
    },
    {
        name: "alibi",
        type: "defender",
        specialties: ["INTEL", "TRAPPER"]
    },
    {
        name: "vigil",
        type: "defender",
        specialties: ["ANTI-GADGET", "CROWD CONTROL"]
    },
    {
        name: "ela",
        type: "defender",
        specialties: ["CROWD CONTROL", "TRAPPER"]
    },
    {
        name: "lesion",
        type: "defender",
        specialties: ["ANTI-ENTRY", "TRAPPER"]
    },
    {
        name: "mira",
        type: "defender",
        specialties: ["INTEL", "SUPPORT"]
    },
    {
        name: "echo",
        type: "defender",
        specialties: ["INTEL", "CROWD CONTROL"]
    },
    {
        name: "caveira",
        type: "defender",
        specialties: ["INTEL", "CROWD CONTROL"]
    },
    {
        name: "valkyrie",
        type: "defender",
        specialties: ["INTEL", "SUPPORT"]
    },
    {
        name: "frost",
        type: "defender",
        specialties: ["ANTI-ENTRY", "TRAPPER"]
    },
    {
        name: "mute",
        type: "defender",
        specialties: ["ANTI-GADGET", "CROWD CONTROL"]
    },
    {
        name: "smoke",
        type: "defender",
        specialties: ["ANTI-ENTRY", "TRAPPER"]
    },
    {
        name: "castle",
        type: "defender",
        specialties: ["ANTI-ENTRY", "SUPPORT"]
    },
    {
        name: "pulse",
        type: "defender",
        specialties: ["INTEL", "SUPPORT"]
    },
    {
        name: "doc",
        type: "defender",
        specialties: ["SUPPORT"]
    },
    {
        name: "rook",
        type: "defender",
        specialties: ["SUPPORT"]
    },
    {
        name: "jager",
        type: "defender",
        specialties: ["ANTI-GADGET", "SUPPORT"]
    },
    {
        name: "bandit",
        type: "defender",
        specialties: ["ANTI-ENTRY", "ANTI-GADGET"]
    },
    {
        name: "tachanka",
        type: "defender",
        specialties: ["ANTI-ENTRY", "CROWD CONTROL"]
    },
    {
        name: "kapkan",
        type: "defender",
        specialties: ["ANTI-ENTRY", "TRAPPER"]
    }
];