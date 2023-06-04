export interface Category {
    id: number;
    name: string;
    games: any[];
}

export interface Game {
    id: number;
    title: string;
    popularity: number;
    createdAt: string;
}

export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    createdAt: string;
    comments: any[];
    games: any[];
    userGames: any[];
    ratings: any[];
}