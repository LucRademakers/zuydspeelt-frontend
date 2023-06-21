// usePost.tsx
import { useState } from 'react';
import { mutate } from 'swr';

async function post<T>(url: string, data: any): Promise<T> {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error('An error occurred while posting.');
    }
    return response.json() as Promise<T>;
}

function usePost<T>(url: string) {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const doPost = async (data: any) => {
        setIsLoading(true);
        const responseData = await post<T>(url, data);
        setIsLoading(false);
        mutate(url);
        return responseData;
    };

    return { doPost, isLoading };
}

export default usePost;
