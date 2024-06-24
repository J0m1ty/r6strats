export type Floor = "B" | "1f" | "2f" | "3f";
export type Site = "A" | "B";

export type Room = { name: string; floor: Floor; } & ({
    bombsite: false;
} | {
    bombsite: true;
    id: number;
    site: Site;
});