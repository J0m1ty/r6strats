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

export const operatorNames = ["striker", "sentry", "sledge", "thatcher", "ash", "thermite", "twitch", "montagne", "glaz", "fuze", "blitz", "iq", "buck", "blackbeard", "capitao", "hibana", "jackal", "ying", "zofia", "dokkaebi", "lion", "finka", "maverick", "nomad", "gridlock", "nokk", "amaru", "kali", "iana", "ace", "zero", "flores", "osa", "sens", "grim", "brava", "ram", "deimos", "smoke", "mute", "castle", "pulse", "doc", "rook", "kapkan", "tachanka", "jager", "bandit", "frost", "valkyrie", "caveira", "echo", "mira", "lesion", "ela", "vigil", "alibi", "maestro", "clash", "kaid", "mozzie", "warden", "goyo", "wamai", "oryx", "melusi", "aruni", "thunderbird", "thorn", "azami", "solis", "fenrir", "tubarao"] as const;
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
        specialties: ["FRONT LINE" , "MAP CONTROL"],
        gadgets: ["Hard Breach Charge", "Frag Grenade", "Impact EMP Grenade"],
        primary: getWeapon(["5.7 USG", "D-50"]),
        secondary: getWeapon(["GONNE-6", "SMG-11", "ITA12S"]),
        speed: 2,
        health: 2
    },
    {
        name: "gridlock",
        type: "attacker",
        specialties: ["SUPPORT" , "MAP CONTROL"],
        gadgets: ["Smoke Grenade", "Frag Grenade", "Impact EMP Grenade"],
        primary: getWeapon(["F90", "M249 SAW"]),
        secondary: getWeapon(["SUPER SHORTY", "SDP 9MM"]),
        speed: 1,
        health: 3
    },
    {
        name: "nomad",
        type: "attacker",
        specialties: ["FRONT LINE" , "MAP CONTROL"],
        gadgets: ["Breach Charge", "Stun Grenade"],
        primary: getWeapon(["AK-74M", "ARX200"]),
        secondary: getWeapon(["PRB92", ".44 MAG SEMI-AUTO"]),
        speed: 2,
        health: 2
    },
    {
        name: "maverick",
        type: "attacker",
        specialties: ["BREACH" , "FRONT LINE"],
        gadgets: ["Claymore", "Stun Grenade"],
        primary: getWeapon(["AR-15.50", "M4"]),
        secondary: getWeapon(["1911 TACOPS"]),
        speed: 3,
        health: 1
    },
    {
        name: "lion",
        type: "attacker",
        specialties: ["INTEL" , "MAP CONTROL"],
        gadgets: ["Stun Grenade", "Claymore"],
        primary: getWeapon(["V308", "417", "SG-CQB"]),
        secondary: getWeapon(["GONNE-6", "LFP586", "P9"]),
        speed: 2,
        health: 2
    },
    {
        name: "finka",
        type: "attacker",
        specialties: ["FRONT LINE", "SUPPORT"],
        gadgets: ["Hard Breach Charge", "Stun Grenade", "Smoke Grenade", "Frag Grenade"],
        primary: getWeapon(["SPEAR .308", "6P41", "SASG-12"]),
        secondary: getWeapon(["PMM", "GSH-18"]),
        speed: 2,
        health: 2
    },
    {
        name: "dokkaebi",
        type: "attacker",
        specialties: ["INTEL", "MAP CONTROL"],
        gadgets: ["Smoke Grenade", "Stun Grenade", "Impact EMP Grenade"],
        primary: getWeapon(["MK 14 EBR", "BOSG.12.2"]),
        secondary: getWeapon(["GONNE-6", "SMG-12", "C75 AUTO"]),
        speed: 3,
        health: 1
    },
    {
        name: "zofia",
        type: "attacker",
        specialties: ["BREACH" , "ANTI-GADGET"],
        gadgets: ["Breach Charge", "Claymore"],
        primary: getWeapon(["LMG-E", "M762"]),
        secondary: getWeapon(["RG15"]),
        speed: 1,
        health: 3
    },
    {
        name: "ying",
        type: "attacker",
        specialties: ["FRONT LINE" , "MAP CONTROL"],
        gadgets: ["Hard Breach Charge", "Smoke Grenade"],
        primary: getWeapon(["T-95 LSW", "SIX12"]),
        secondary: getWeapon(["Q-929"]),
        speed: 2,
        health: 2
    },
    {
        name: "jackal",
        type: "attacker",
        specialties: ["INTEL" , "MAP CONTROL"],
        gadgets: ["Claymore", "Smoke Grenade"],
        primary: getWeapon(["C7E", "PDW9", "ITA12L"]),
        secondary: getWeapon(["USP40", "ITA12S"]),
        speed: 2,
        health: 2
    },
    {
        name: "hibana",
        type: "attacker",
        specialties: ["BREACH", "FRONT LINE"],
        gadgets: ["Stun Grenade", "Breach Charge"],
        primary: getWeapon(["TYPE-89", "SUPERNOVA"]),
        secondary: getWeapon(["P229", "BEARING 9"]),
        speed: 3,
        health: 1
    },
    {
        name: "capitao",
        type: "attacker",
        specialties: ["FRONT LINE" , "MAP CONTROL"],
        gadgets: ["Claymore", "Hard Breach Charge", "Impact EMP Grenade"],
        primary: getWeapon(["PARA-308", "M249"]),
        secondary: getWeapon(["PRB92", "GONNE-6"]),
        speed: 3,
        health: 1
    },
    {
        name: "blackbeard",
        type: "attacker",
        specialties: ["SUPPORT"],
        gadgets: ["Stun Grenade", "Claymore"],
        primary: getWeapon(["MK17 CQB", "SR-25"]),
        secondary: getWeapon(["D-50"]),
        speed: 2,
        health: 2
    },
    {
        name: "buck",
        type: "attacker",
        specialties: ["BREACH" , "SUPPORT"],
        gadgets: ["Hard Breach Charge", "Stun Grenade"],
        primary: getWeapon(["C8-SFW", "CAMRS"]),
        secondary: getWeapon(["MK1 9MM", "GONNE-6"]),
        speed: 2,
        health: 2
    },
    {
        name: "sledge",
        type: "attacker",
        specialties: ["BREACH" , "ANTI-GADGET"],
        gadgets: ["Frag Grenade", "Stun Grenade", "Impact EMP Grenade"],
        primary: getWeapon(["L85A2", "M590A1"]),
        secondary: getWeapon(["P226 MK 25"]),
        speed: 1,
        health: 3
    },
    {
        name: "thatcher",
        type: "attacker",
        specialties: ["ANTI-GADGET" , "SUPPORT"],
        gadgets: ["Breach Charge", "Claymore"],
        primary: getWeapon(["AR33", "L85A2", "M590A1"]),
        secondary: getWeapon(["P226 MK 25"]),
        speed: 1,
        health: 3
    },
    {
        name: "ash",
        type: "attacker",
        specialties: ["BREACH" , "FRONT LINE"],
        gadgets: ["Breach Charge", "Claymore"],
        primary: getWeapon(["G36C", "R4-C"]),
        secondary: getWeapon(["5.7 USG", "M45 MEUSOC"]),
        speed: 3,
        health: 1
    },
    {
        name: "thermite",
        type: "attacker",
        specialties: ["BREACH" , "SUPPORT"],
        gadgets: ["Smoke Grenade", "Stun Grenade"],
        primary: getWeapon(["M1014", "556XI"]),
        secondary: getWeapon(["5.7 USG", "M45 MEUSOC"]),
        speed: 2,
        health: 2
    },
    {
        name: "montagne",
        type: "attacker",
        specialties: ["INTEL" , "SUPPORT"],
        gadgets: ["Hard Breach Charge", "Smoke Grenade", "Stun Grenade"],
        primary: getWeapon(["LE ROC SHIELD"]),
        secondary: getWeapon(["P9", "LFP586"]),
        speed: 1,
        health: 3
    },
    {
        name: "twitch",
        type: "attacker",
        specialties: ["ANTI-GADGET" , "INTEL"],
        gadgets: ["Smoke Grenade", "Claymore"],
        primary: getWeapon(["F2", "417", "SG-CQB"]),
        secondary: getWeapon(["P9", "LFP586"]),
        speed: 2,
        health: 2
    },
    {
        name: "blitz",
        type: "attacker",
        specialties: ["FRONT LINE" , "MAP CONTROL"],
        gadgets: ["Smoke Grenade", "Breach Charge"],
        primary: getWeapon(["G52-TACTICAL SHIELD"]),
        secondary: getWeapon(["P12"]),
        speed: 2,
        health: 2
    },
    {
        name: "iq",
        type: "attacker",
        specialties: ["INTEL" , "SUPPORT"],
        gadgets: ["Breach Charge", "Claymore"],
        primary: getWeapon(["AUG A2", "552 COMMANDO", "G8A1"]),
        secondary: getWeapon(["P12"]),
        speed: 3,
        health: 1
    },
    {
        name: "fuze",
        type: "attacker",
        specialties: ["ANTI-GADGET"],
        gadgets: ["Breach Charge", "Hard Breach Charge", "Smoke Grenade"],
        primary: getWeapon(["AK-12", "6P41", "BALLISTIC SHIELD"]),
        secondary: getWeapon(["PMM", "GSH-18"]),
        speed: 1,
        health: 3
    },
    {
        name: "glaz",
        type: "attacker",
        specialties: ["INTEL" , "SUPPORT"],
        gadgets: ["Smoke Grenade", "Frag Grenade", "Claymore"],
        primary: getWeapon(["OTS-03"]),
        secondary: getWeapon(["PMM", "GONNE-6", "BEARING 9"]),
        speed: 1,
        health: 3
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