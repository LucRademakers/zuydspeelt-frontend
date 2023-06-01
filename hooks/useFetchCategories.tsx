import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '@/constants/apiConstants';

interface Category {
    categoryId: number;
    categoryName: string;
    games: any[];
}

const useFetchCategories = (): [Category[], boolean] => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const response = await fetch(API_ENDPOINTS.categories);
            const json = await response.json();
            setCategories(json);
            setIsLoading(false);
        };

        fetchData().catch(error => {
            console.error(error);
            setIsLoading(false);
        });
    }, []);

    return [categories, isLoading];
};

export default useFetchCategories;