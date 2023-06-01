export interface Category {
    categoryId: number;
    categoryName: string;
    games: any[];
}

export interface Categories {
    categories: Category[];
}

export interface FetchCategoriesState extends Categories {
    isFetching: boolean;
    error: Error | null;
}