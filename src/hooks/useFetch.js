import { useEffect, useState } from 'react'

export const useFetch = (apiPath, queryTerm = "") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=dd1b386e88b88aad32b851c505051f17&language=en-US&page=1&query=${queryTerm}`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [url]);

    return { data };
}
