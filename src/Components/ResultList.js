import React from "react";
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from "react-native"
import ResultDetail from "./ResultDetail";
import { withNavigation } from "react-navigation";
const ResultList =({title,results,navigat  ion}) =>{
return(
    <View style={styles.container}>
     <Text style={styles.title}>{title}</Text>
     <FlatList 
     showsHorizontalScrollIndicator={false}
     horizontal
     data={results}
     keyExtractor = {result => result.id}
     renderItem={({item}) =>{
        return (
            <TouchableOpacity onPress={()=> navigation.navigate("ResultShow")  }>
                <ResultDetail result={item}/>
            </TouchableOpacity>
            )
     }} />
    </View>
)
}

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:15,
        marginBottom:5
    },
    container:{
       marginBottom:10,
       marginRight:15
    }
});
export default  withNavigation(ResultList);