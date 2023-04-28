import React, { useState} from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import useResults from "../Hooks/useResults";
import ResultList from "../Components/ResultList";
const searchscreen = () => {
  const [term, setTerm] = useState(" ");
  const [searchApi,results,errorMessage] = useResults();
 
  const filterResultByPrice = (price) => {
    //  if price = $ || price = $$ || price = $$$
        return results.filter(result =>{
           return result.price === price;
        })

  }
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
    <View style={{ flex:1 }}>
      <SearchBar
      term={term} 
      onTermChange={setTerm} 
      onTermSubmit={()=> searchApi(term)} /> 
      {errorMessage?<Text>{errorMessage}</Text> : null}
      <ScrollView>
      <ResultList  results = {filterResultByPrice("$")} title="Cost Effective"/>
      <ResultList  results = {filterResultByPrice("$$")} title="Bit Pricier"/>
      <ResultList  results = {filterResultByPrice("$$$")} title="Big Spender"/>
      </ScrollView>      
    </View>
  );

};

export default searchscreen;
