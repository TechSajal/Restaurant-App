import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../Components/SearchBar";
import yelp from "../Api/yelp"
import axios from "axios";
const searchscreen = () => {
  const [term, setTerm] = useState(" ");
  const [results, setResults] = useState([]);

  const searchApi = async() => {
  try{
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term,
        location: "san jose"
      }
    });
    setResults(response.data.businesses);
  }catch(error){
     console.log("error")
  }
  };
  //  function onClick(){
  //    axios.get( "https://api.yelp.com/v3/businesses/search",{
  //     params: {
  //       location:"san jose",
  //       term,
  //       limit:50
  //     },
  //     headers: {
  //       Authorization: "Bearer IRNA-JfN4JQ6FACRVTtmnQNtxTBfficDLPzWAhwoV-4X321egin_nZqFc7v5z1sG64S9DM7pf_r10sazU98DpiePiRRY7xYn-cgrbKNukBROC5hQGJF0C7cSGitKZHYx"
  //   }
  //    })
  //    .then((response) => setResults(response.data.businesses))
  //    .catch((error)=>{
  //       console.error(error);
  //    })
  //  };
  return (
    <View>
      <SearchBar
      term={term} 
      onTermChange={setTerm} 
      onTermSubmit={()=> searchApi()} /> 
      <Text>We have found {results.length} results</Text>
    </View>
  );

};

export default searchscreen;
