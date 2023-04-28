import React,{ useEffect,useState } from "react";
import yelp from "../Api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage,setErrorMessage] = useState("");
   
    const searchApi = async (searchterm) => {
    try{
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term:searchterm,
          location: "san jose"
        }
      });
      setResults(response.data.businesses);
    }catch(error){
       setErrorMessage("Something Went Wrong")
    }
    };
    // call searchApi when component is fist rendered
    // BAD CODE !! 
    //  whenever we want to do initial state change in the component we never called function directly we can get to infinity loop
    useEffect(()=>{
      searchApi("pasta");
    },[])

    return [searchApi,results,errorMessage];
}