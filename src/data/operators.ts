import { Ace } from "./attackers/Ace";
import { Amaru } from "./attackers/Amaru";
import { Ash } from "./attackers/Ash";
import { Blackbeard } from "./attackers/Blackbeard";
import { Blitz } from "./attackers/Blitz";
import { Brava } from "./attackers/Brava";
import { Buck } from "./attackers/Buck";
import { Capitao } from "./attackers/Capitao";
import { Deimos } from "./attackers/Deimos";
import { Dokkaebi } from "./attackers/Dokkaebi";
import { Finka } from "./attackers/Finka";
import { Flores } from "./attackers/Flores";
import { Fuze } from "./attackers/Fuze";
import { Glaz } from "./attackers/Glaz";
import { Gridlock } from "./attackers/Gridlock";
import { Grim } from "./attackers/Grim";
import { Hibana } from "./attackers/Hibana";
import { Iana } from "./attackers/Iana";
import { IQ } from "./attackers/IQ";
import { Jackal } from "./attackers/Jackal";
import { Kali } from "./attackers/Kali";
import { Lion } from "./attackers/Lion";
import { Maverick } from "./attackers/Maverick";
import { Montagne } from "./attackers/Montagne";
import { Nokk } from "./attackers/Nokk";
import { Nomad } from "./attackers/Nomad";
import { Osa } from "./attackers/Osa";
import { Ram } from "./attackers/Ram";
import { Sens } from "./attackers/Sens";
import { Sledge } from "./attackers/Sledge";
import { Striker } from "./attackers/Striker";
import { Thatcher } from "./attackers/Thatcher";
import { Thermite } from "./attackers/Thermite";
import { Twitch } from "./attackers/Twitch";
import { Ying } from "./attackers/Ying";
import { Zero } from "./attackers/Zero";
import { Zofia } from "./attackers/Zofia";
import { Sentry } from "./defenders/Sentry";

export const attackers = {
    Striker,
    Sledge,
    Thatcher,
    Ash,
    Thermite,
    Twitch,
    Montagne,
    Glaz,
    Fuze,
    Blitz,
    IQ,
    Buck,
    Blackbeard,
    Capitao,
    Hibana,
    Jackal,
    Ying,
    Zofia,
    Dokkaebi,
    Lion,
    Finka,
    Maverick,
    Nomad,
    Gridlock,
    Nokk,
    Amaru,
    Kali,
    Iana,
    Ace,
    Zero,
    Flores,
    Osa,
    Sens,
    Grim,
    Brava,
    Ram,
    Deimos
};

export const defenders = {
    Sentry
};

export const operators = {
    ...attackers,
    ...defenders
};

export type OperatorName = keyof typeof operators;