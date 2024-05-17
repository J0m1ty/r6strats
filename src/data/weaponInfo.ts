export type WeaponType = "primary" | "secondary";

export const weaponNames = ["L85A2", "AR33", "G36C", "R4-C", "556xi", "F2", "AK-12", "AUG A2", "552 Commando", "416-C Carbine", "C8-SFW", "Mk17 CQB", "PARA-308", "Type-89", "C7E", "M762", "V308", "Spear .308", "M4", "AK-74M", "ARX200", "F90", "Commando 9", "SC3000K", "POF-9", "FMG-9", "MP5K", "UMP45", "MP5", "P90", "9x19VSN", "MP7", "9mm C1", "MPX", "M12", "MP5SD", "PDW9", "Vector .45 ACP", "T-5 SMG", "Scorpion EVO 3 A1", "K1A", "Mx4 Storm", "AUG A3", "P10 RONI", "UZK50GI", "M590A1", "M1014", "SG-CQB", "SASG-12", "M870", "Super 90", "SPAS-12", "SPAS-15", "SuperNova", "ITA12L", "ITA12S", "SIX12", "FO-12", "BOSG.12.2", "ACS12", "TCSG12", "Super Shorty", "417", "OTs-03", "CAMRS", "SR-25", "Mk 14 EBR", "AR-15.50", "CSRX 300", "6P41", "G8A1", "M249", "T-95 LSW", "LMG-E", "ALDA 5.56", "DP27", "P226 Mk 25", "M45 MEUSOC", "5.7 USG", "P9", "LFP586", "GSh-18", "PMM", "P12", "Mk1 9mm", "D-50", "PRB92", "P229", "USP40", "Q-929", "RG15", "Bailiff 410", "Keratos .357", "1911 TACOPS", "P-10C", ".44 Mag Semi-Auto", "SDP 9mm", "SMG-11", "Bearing 9", "C75 Auto", "SMG-12", "SPSMG9", "GONNE-6"];
export type WeaponName = typeof weaponNames[number];

export const weaponCategories = ["ASSAULT RIFLE", "SUBMACHINE GUN", "SHOTGUN", "MARKSMAN RIFLE", "LIGHT MACHINE GUN", "HANDGUN", "MACHINE PISTOL"] as const;
export type WeaponCategory = typeof weaponCategories[number];

export type WeaponData = {
    name: string;
    type: WeaponType;
    category: WeaponCategory;
    acog: boolean;
};