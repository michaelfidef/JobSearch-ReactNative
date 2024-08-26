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
          'x-rapidapi-key': 'd2159e15f1msh9c3de54fb02c11ep145702jsnf761e6c0e27f',
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
            console.error("Error fetching data:", error); 
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