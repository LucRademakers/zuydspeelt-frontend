import { useEffect, useState } from 'react';
import { Category, FetchCategoriesState } from '@/types/models';
import { API_ENDPOINTS } from '@/constants/apiConstants';

const useFetchCategories = (): FetchCategoriesState => {
    const [state, setState] = useState<FetchCategoriesState>({
        categories: [],
        isFetching: true,
        error: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_ENDPOINTS.categories);
                const categories: Category[] = await response.json();
                setState({ categories, isFetching: false, error: null });
            } catch (error) {
                setState({ categories: [], isFetching: false, error: error as Error });
            }
        };

        fetchData();
    }, []);

    return state;
};

export default useFetchCategories;
