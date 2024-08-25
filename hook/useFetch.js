import { useState, useEffect } from "react"; 
import axios from "axios";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

      const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'x-rapidapi-key': '78b870a53emsh16d0a6041dd8001p1d8817jsnbfd0892b7205',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query }
    };

      const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            console.log("API Response:", response.data);
            setData(response.data.data);
            setIsLoading(false);
        }catch (error){
            console.error("Error fetching data:", error); // Tambahkan logging untuk melihat kesalahan
            setError(error);
            alert("There is an error");
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetech = () => {
        setIsLoading(true);
        fetchData();
    }
    return {data, isLoading, error, refetech}
}

export default useFetch;