import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url, options, cacheTime = 0) => {
    const cache = JSON.parse(localStorage.getItem("cache")) || {};
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const cacheExpireTime = Date.now() - cache[url]?.timeStamp;

            if (cache[url] && cacheExpireTime < cacheTime) {
                setData(cache[url].data);
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(url, options);
                setData(response.data);
                cache[url] = { data: response.data, timeStamp: Date.now() };
                localStorage.setItem("cache", JSON.stringify(cache));
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;