import { Player } from "./Player";

export type Game = {
    players: Player[],
    stats: any, // per game stats, defined by the game server
    winner: Player | null,
    tie: boolean,
    duration: number,
};
