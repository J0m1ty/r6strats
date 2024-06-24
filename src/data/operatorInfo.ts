import { AttackerGadget, DefenderGadget } from "./gadgetInfo";
import { map } from "./mapInfo";
import { Weapon, WeaponName, weapons } from "./weaponInfo";

export type OperatorType = "attacker" | "defender";

export type OperatorSpecialty = "INTEL" | "MAP CONTROL" | "ANTI-ENTRY" | "ANTI-GADGET" | "BREACH" | "TRAPPER" | "CROWD CONTROL" | "SUPPORT" | "FRONT LINE";

export type Gadget = "frag-grenade" | "Hard Breach Charge" | "Smoke Grenade" | "stun-grenade" | "Claymore" | "Impact EMP Grenade" | "Breach Charge"

export type OperatorElement = {
    data: OperatorData<OperatorPosition>;
    shown: boolean;
};

export type OperatorPosition = "attacker" | "defender";

export const operatorNames = ["striker", "sentry", "sledge", "thatcher", "ash", "thermite", "twitch", "montagne", "glaz", "fuze", "blitz", "iq", "Buck", "blackbeard", "capitao", "hibana", "jackal", "ying", "zofia", "dokkaebi", "lion", "finka", "maverick", "nomad", "gridlock", "nokk", "amaru", "kali", "iana", "ace", "zero", "flores", "osa", "sens", "grim", "brava", "ram", "deimos", "smoke", "mute", "castle", "pulse", "doc", "rook", "kapkan", "tachanka", "jager", "bandit", "frost", "valkyrie", "caveira", "echo", "mira", "lesion", "ela", "vigil", "alibi", "maestro", "clash", "kaid", "mozzie", "warden", "goyo", "wamai", "oryx", "melusi", "aruni", "thunderbird", "thorn", "azami", "solis", "fenrir", "tubarao"] as const;
export type OperatorName = typeof operatorNames[number];

export const attackerSpecialties = ["INTEL", "MAP CONTROL", "ANTI-GADGET", "BREACH", "SUPPORT", "FRONT LINE"] as const;
export const defenderSpecialties = ["INTEL", "ANTI-ENTRY", "ANTI-GADGET", "TRAPPER", "CROWD CONTROL", "SUPPORT"] as const;
export type AttackerSpecialty = typeof attackerSpecialties[number];
export type DefenderSpecialty = typeof defenderSpecialties[number];

export type OperatorData<T extends OperatorPosition> = {
    name: OperatorName;
    type: T;
    specialties: T extends "attacker" ? AttackerSpecialty[] : T extends "defender" ? DefenderSpecialty[] : never;
    primary: Weapon[];
    secondary: Weapon[];
    gadgets: T extends "attacker" ? AttackerGadget[] : T extends "defender" ? DefenderGadget[] : never;
    speed: 1 | 2 | 3;
    health: 1 | 2 | 3;
};

function getWeapon(weaponNames : WeaponName[]) : Weapon[] {
    return weapons.filter((weapon : Weapon) => {
        weaponNames.forEach((weaponName) => {
            if (weapon.name == weaponName){
                return weapon
            }
        })
    })
}

const attackers: OperatorData<OperatorType>[] = [

    //Attackers
    {
        name: "striker",
        specialties: ["SUPPORT"],
        gadgets: ["Breach Charge", "Claymore", "Frag Grenade", "Hard Breach Charge", "Smoke Grenade", "Stun Grenade", "Impact EMP Grenade"],
        type: "attacker",
        primary: getWeapon(["M4", "M249"]),
        secondary: getWeapon(["5.7 USG", "ITA12S"]),
        speed: 2,
        health: 2
    },
    {
        name: "deimos",
        specialties: ["INTEL", "MAP CONTROL"],
        gadgets: ["Frag Grenade", "Hard Breach Charge", "Smoke Grenade"],
        type: "attacker",
        primary: getWeapon(["AK-74M", "M590A1"]),
        secondary: getWeapon([".44 VENDETTA"]),
        speed: 2,
        health: 2
    },
    {
        name: "ram",
        type: "attacker",
        specialties: ["BREACH"],
        gadgets: ["Smoke Grenade", "Stun Grenade"],
        primary: getWeapon(["R4-C", "LMG-E"]),
        secondary: getWeapon(["ITA12S", "MK1 9MM"]),
        speed: 1,
        health: 3
    },
    {
        name: "brava",
        type: "attacker",
        specialties: ["INTEL", "ANTI-GADGET"],
        gadgets: ["Smoke Grenade", "Claymore"],
        primary: getWeapon(["PARA-308", "CAMRS"]),
        secondary: getWeapon(["USP40", "SUPER SHORTY"]),
        speed: 3,
        health: 1
    },
    {
        name: "grim",
        type: "attacker",
        specialties: ["FRONT LINE", "MAP CONTROL"],
        gadgets: ["Impact EMP Grenade", "Claymore", "Hard Breach Charge", "Breach Charge"],
        primary: getWeapon(["552 COMMANDO", "SG-CQB"]),
        secondary: getWeapon(["P229", "BAILIFF 410"]),
        speed: 3,
        health: 1
    },
    {
        name: "sens",
        type: "attacker",
        specialties: ["SUPPORT", "MAP CONTROL"],
        gadgets: ["Hard Breach Charge", "Claymore"],
        primary: getWeapon(["POF9", "417"]),
        secondary: getWeapon(["SDP 9MM", "GONNE-6"]),
        speed: 3,
        health: 1
    },
    {
        name: "osa",
        type: "attacker",
        specialties: ["INTEL", "SUPPORT"],
        gadgets: ["Frag Grenade", "Claymore", "Impact EMP Grenade"],
        primary: getWeapon(["556XI", "PDW9"]),
        secondary: getWeapon(["PMM"]),
        speed: 1,
        health: 3
    },
    {
        name: "flores",
        type: "attacker",
        specialties: ["ANTI-GADGET","INTEL"],
        gadgets: ["Claymore", "Stun Grenade"],
        primary: getWeapon(["AR33", "SR-25"]),
        secondary: getWeapon(["GSH-18"]),
        speed: 2,
        health: 2
    },
    {
        name: "zero",
        type: "attacker",
        specialties: ["ANTI-GADGET","INTEL"],
        gadgets: ["Claymore", "Hard Breach Charge"],
        primary: getWeapon(["SC3000K", "MP7"]),
        secondary: getWeapon(["5.7 USG", "GONNE-6"]),
        speed: 3,
        health: 1
    },
    {
        name: "ace",
        type: "attacker",
        specialties: ["BREACH","ANTI-GADGET"],
        gadgets: ["Breach Charge", "Claymore"],
        primary: getWeapon(["AK-12", "M1014"]),
        secondary: getWeapon(["P9"]),
        speed: 2,
        health: 2
    },
    {
        name: "iana",
        type: "attacker",
        specialties: ["FRONT LINE" , "INTEL"],
        gadgets: ["Impact EMP Grenade", "Smoke Grenade"],
        primary: getWeapon(["ARX200", "G36C"]),
        secondary: getWeapon(["MK1 9MM", "GONNE-6"]),
        speed: 2,
        health: 2
    },
    {
        name: "kali",
        type: "attacker",
        specialties: ["ANTI-GADGET" , "SUPPORT"],
        gadgets: ["Breach Charge", "Claymore"],
        primary: getWeapon(["CSRX 300"]),
        secondary: getWeapon(["SPSMG9", "C75 AUTO", "P226 MK 25"]),
        speed: 2,
        health: 2
    },
    {
        name: "amaru",
        type: "attacker",
        specialties: ["FRONT LINE" , "MAP CONTROL"],
        gadgets: ["Stun Grenade", "Hard Breach Charge"],
        primary: getWeapon(["G8A1", "SUPERNOVA"]),
        secondary: getWeapon(["GONNE-6", "SMG-11", "ITA12S"]),
        speed: 2,
        health: 2
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