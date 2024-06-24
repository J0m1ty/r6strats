export type WeaponType = "primary" | "secondary";

export const weaponNames = ["M249 SAW", "CCE SHIELD", "G52-TACTICAL SHIELD", "LE ROC SHIELD", "BALLISTIC SHIELD", ".44 VENDETTA", "L85A2", "AR33", "G36C", "R4-C", "556XI", "F2", "AK-12", "AUG A2", "552 COMMANDO", "416-C Carbine", "C8-SFW", "Mk17 CQB", "PARA-308", "Type-89", "C7E", "M762", "V308", "Spear .308", "M4", "AK-74M", "ARX200", "F90", "Commando 9", "SC3000K", "POF9", "FMG-9", "MP5K", "UMP45", "MP5", "P90", "9x19VSN", "MP7", "9MM C1", "MPX", "M12", "MP5SD", "PDW9", "Vector .45 ACP", "T-5 SMG", "Scorpion EVO 3 A1", "K1A", "Mx4 Storm", "AUG A3", "P10 RONI", "UZK50GI", "M590A1", "M1014", "SG-CQB", "SASG-12", "M870", "Super 90", "SPAS-12", "SPAS-15", "SUPERNOVA", "ITA12L", "ITA12S", "SIX12 SD", "FO-12", "BOSG.12.2", "ACS12", "TCSG12", "SUPER SHORTY", "417", "OTs-03", "CAMRS", "SR-25", "Mk 14 EBR", "AR-15.50", "CSRX 300", "6P41", "G8A1", "M249", "T-95 LSW", "LMG-E", "ALDA 5.56", "DP27", "P226 MK 25", "M45 MEUSOC", "5.7 USG", "P9", "LFP586", "GSH-18", "PMM", "P12", "MK1 9MM", "D-50", "PRB92", "P229", "USP40", "Q-929", "RG15", "BAILIFF 410", "Keratos .357", "1911 TACOPS", "P-10C", ".44 Mag Semi-Auto", "SDP 9MM", "SMG-11", "Bearing 9", "C75 AUTO", "SMG-12", "SPSMG9", "GONNE-6"] as const;
export type WeaponName = typeof weaponNames[number];

export const weaponCategories = ["SHIELD", "HAND CANNON", "ASSAULT RIFLE", "SUBMACHINE GUN", "SHOTGUN", "MARKSMAN RIFLE", "LIGHT MACHINE GUN", "HANDGUN", "MACHINE PISTOL"] as const;
export type WeaponCategory = typeof weaponCategories[number];

export type WeaponData = {
    name: WeaponName;
    type: WeaponType;
    category: WeaponCategory;
    // hasAcog: boolean;
    hasUniqueSight?: true;
};

//TODO: Add acog true/false to all gun entries, NEED accurate list first
//TODO: Add damage, fire rate,  magazine size, and total ammunition stats to all gun entries
//TODO: Add all gun icons from r6 website
export const weapons : WeaponData[] = [
    //Primaries
    {
        name: "M249 SAW",
        type: "primary",
        category: "LIGHT MACHINE GUN",
    },
    {
        name: "F90",
        type: "primary",
        category: "ASSAULT RIFLE",
    },
    {
        name: "SIX12 SD",
        type: "primary",
        category: "SHOTGUN",
    },
    {
        name: "FMG-9",
        type: "primary",
        category: "SUBMACHINE GUN",
    },
    {
        name: "SUPERNOVA",
        type: "primary",
        category: "SHOTGUN",
    },
    {
        name: "G8A1",
        type: "primary",
        category: "LIGHT MACHINE GUN",
    },
    {
        name: "CSRX 300",
        type: "primary",
        category: "MARKSMAN RIFLE",
        hasUniqueSight: true
    },
    {
        name: "G36C",
        type: "primary",
        category: "ASSAULT RIFLE",
    },
    {
        name: "ARX200",
        type: "primary",
        category: "ASSAULT RIFLE",
    },
    {
        name: "AK-12",
        type: "primary",
        category: "SHOTGUN",
    },
    {
        name: "AK-12",
        type: "primary",
        category: "ASSAULT RIFLE",
    },
    {
        name: "M4",
        type: "primary",
        category: "ASSAULT RIFLE",
    },
    {
        name: "M249",
        type: "primary",
        category: "LIGHT MACHINE GUN",
    },
    {
        name: "AK-74M",
        type: "primary",
        category: "ASSAULT RIFLE"
    },
    {
        name: "M590A1",
        type: "primary",
        category: "SHOTGUN",
    },
    {
        name: "R4-C",
        type: "primary",
        category: "ASSAULT RIFLE",
    },
    {
        name: "LMG-E",
        type: "primary",
        category: "LIGHT MACHINE GUN",
    },
    {
        name: "PARA-308",
        type: "primary",
        category: "ASSAULT RIFLE",
    },
    {
        name: "CAMRS",
        type: "primary",
        category: "MARKSMAN RIFLE",
    },
    {
        name: "552 COMMANDO",
        type: "primary",
        category: "ASSAULT RIFLE",
    },
    {
        name: "SG-CQB",
        type: "primary",
        category: "SHOTGUN",
    },
    {
        name: "POF9",
        type: "primary",
        category: "ASSAULT RIFLE",
    },
    {
        name: "417",
        type: "primary",
        category: "MARKSMAN RIFLE",
    },
    {
        name: "556XI",
        type: "primary",
        category: "ASSAULT RIFLE",
    },
    {
        name: "PDW9",
        type: "primary",
        category: "SUBMACHINE GUN",
    },
    {
        name: "AR33",
        type: "primary",
        category: "ASSAULT RIFLE",
    },
    {
        name: "SR-25",
        type: "primary",
        category: "MARKSMAN RIFLE",
    },
    {
        name: "SC3000K",
        type: "primary",
        category: "ASSAULT RIFLE",
    },
    {
        name: "MP7",
        type: "primary",
        category: "SUBMACHINE GUN",
    },

    //Secondaries
    {
        name: "D-50",
        type: "secondary",
        category: "HANDGUN"
    },
    {
        name: "SMG-11",
        type: "secondary",
        category: "MACHINE PISTOL"
    },
    {
        name: "P226 MK 25",
        type: "secondary",
        category: "HANDGUN"
    },
    {
        name: "C75 AUTO",
        type: "secondary",
        category: "MACHINE PISTOL"
    },
    {
        name: "SPSMG9",
        type: "secondary",
        category: "MACHINE PISTOL"
    },
    {
        name: "P9",
        type: "secondary",
        category: "HANDGUN"
    },
    {
        name: "5.7 USG",
        type: "secondary",
        category: "HANDGUN"
    },
    {
        name: "ITA12S",
        type: "secondary",
        category: "SHOTGUN"
    },
    {
        name: ".44 VENDETTA",
        type: "secondary",
        category: "HANDGUN",
        hasUniqueSight: true
    },
    {
        name: "MK1 9MM",
        type: "secondary",
        category: "HANDGUN",
    },
    {
        name: "USP40",
        type: "secondary",
        category: "HANDGUN",
    },
    {
        name: "SUPER SHORTY",
        type: "secondary",
        category: "SHOTGUN",
    },
    {
        name: "P229",
        type: "secondary",
        category: "HANDGUN",
    },
    {
        name: "BAILIFF 410",
        type: "secondary",
        category: "HANDGUN",
    },
    {
        name: "SDP 9MM",
        type: "secondary",
        category: "HANDGUN",
    },
    {
        name: "GONNE-6",
        type: "secondary",
        category: "HAND CANNON",
    },
    {
        name: "PMM",
        type: "secondary",
        category: "HANDGUN",
    },
    {
        name: "GSH-18",
        type: "secondary",
        category: "HANDGUN",
    },

] as const;
export type Weapon = typeof weapons[number];