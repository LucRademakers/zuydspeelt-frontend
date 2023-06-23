import useSWR from 'swr';

interface FetchResult<T> {
    data: T | null;
    error: Error | null;
}

async function fetcher<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('An error occurred while fetching the data.');
    }
    return response.json() as Promise<T>;
}

const useFetch = <T>(url: string): FetchResult<T> => {
    const { data, error } = useSWR<T>(url, fetcher);

    return {
        data: data === undefined ? null : data,
        error: error === undefined ? null : error,
    };
};

export default useFetch;
