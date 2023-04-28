import React from "react";
import {View,TextInput,StyleSheet} from "react-native"
import {Feather} from "@expo/vector-icons"
const searchbar = ({term,onTermChange,onTermSubmit}) =>{
    return(
        <View style={styles.backgroundstyle}>
             <Feather 
             name="search" 
             style={styles.iconstyle} 
             />
             {/* ----------- */}
             <TextInput 
             autoCapitalize="none"
             autoCorrect={false}
             style={styles.inputStyle} 
             placeholder="Search"
             value={term}
                 //  onChangeText={newterm => onTermChange(newterm)}
                //  or
                onChangeText={onTermChange}
             onEndEditing = {onTermSubmit}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundstyle:{
        marginTop:15, 
        backgroundColor:"#F0EEEE",
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:"row",
        marginBottom:10
    },
    inputStyle:{
        fontSize:18,
        flex:1
    },
    iconstyle:{
        fontSize:35,
        alignSelf:"center",
        marginHorizontal:15

    }
    
})
export default searchbar;