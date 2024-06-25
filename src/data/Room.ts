import { Bombsite } from "./Bombsite";

export type Floor = "B" | "1f" | "2f" | "3f";
export type SiteLetter = "A" | "B";

export type Room = { name: string; floor: Floor; } & ({
    bombsite: undefined;
} | {
    bombsite: Bombsite;
    siteLetter: SiteLetter;
});