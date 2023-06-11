'use client';

import { useRef } from 'react';
import useFetch from '@/hooks/useFetch';
import usePost from '@/hooks/usePost';
import { Category } from '@/types/models';
import { API_ENDPOINT } from '@/constants/apiConstants';

const CategoriesList = ({ categories }: { categories: Category[] }) => (
    <div className="grid grid-cols-8 gap-4 p-10">
        {categories?.map(category => (
            <div key={category.id} className="border rounded p-2">{category.id}. {category.name}</div>
        ))}
    </div>
);

const CategoriesDataHandler = () => {
    const { data: categories, error: categoriesError } = useFetch<Category[]>(API_ENDPOINT.CATEGORIES);

    if (categoriesError) {
        return <h2 className="text-center text-sm mb-8">{categoriesError.message}</h2>
    }

    if (!categories) {
        return <h2 className="text-center text-sm mb-8">Fetching..</h2>
    }

    if (categories.length === 0) {
        return <h2 className="text-center text-sm mb-8">Category list is empty.</h2>
    }

    return <CategoriesList categories={categories} />;
}

const CategoriesPage = () => {
    const { doPost, isLoading } = usePost<Category>(API_ENDPOINT.CATEGORIES);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = async () => {
        if (inputRef.current) {
            const categoryName = inputRef.current.value;
            if (categoryName.trim().length === 0) {
                inputRef.current.value = '';
                return;
            }
            const newCategory: Partial<Category> = {
                name: categoryName,
            };
            await doPost(newCategory);
            inputRef.current.value = '';
        }
    }

    return (
        <div className="flex flex-col">
            <div className='flex flex-row justify-between items-center m-8'>
                <h1 className='text-4xl font-bold text-white'>Categories</h1>
                <div className='flex flex-row'>
                    <input ref={inputRef} type="text" id='category_name' className='bg-black focus:border-gray-200 text-white text-sm border-b pl-2 border-white mr-4 focus:outline-none' placeholder="Enter category name" />
                    <button disabled={isLoading} onClick={handleClick} className='bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 border border-gray-700 rounded'>Post</button>
                </div>
            </div>
            <CategoriesDataHandler />
        </div>
    )
}

export default CategoriesPage