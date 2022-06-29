import { useEffect, useState } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setData([]);
        setError(null);

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(response.statusText);
                const jsonData = await response.json();
                setData(jsonData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
