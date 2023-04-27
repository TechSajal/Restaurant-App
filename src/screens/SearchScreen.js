import React,{useState} from "react";
import {View,Text,StyleSheet} from "react-native"
import SearchBar from "../Components/SearchBar";
const searchscreen = () =>{
    const [term,setTerm]  = useState(" ");
    return(
        <View>
              <SearchBar
               term={term}
               onTermChange={newTerm => setTerm(newTerm)}/>
              <Text>Search Screen</Text>
              <Text>{term}</Text>
        </View>
    )
}

export default searchscreen;