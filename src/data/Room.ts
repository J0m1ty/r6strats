
export type Letter = "A" | "B";
export type Site = {
    id: number;
    name: string;
    hostage?: true;
    secure?: true;
} & ({ bomb: true; letter: Letter; } | {});

export type Room = {
    name: string;
    site?: Site;
};