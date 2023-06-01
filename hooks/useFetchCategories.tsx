import { useEffect, useState } from 'react';

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
            const response = await fetch('http://localhost:8080/api/categories');
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