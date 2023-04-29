import React,{useState,useEffect} from "react";
import yelp from "../Api/yelp";
import {View,Text,StyleSheet,FlatList,Image} from "react-native"

const ReasultShowScreen = ({navigation}) => {
    const id = navigation.getParam("id");
    const [result,setResult] = useState(null);
    const [error,setErrorMessage] = useState("");
    const getresult = async (id) => {
        try{
          const response = await yelp.get(`/${id}`);
          setResult(response.data);
        }catch(error){
           setErrorMessage("Something Went Wrong")
        }
        };

        useEffect(()=>{
            getresult(id);
        },[]);

        if(!result){
            return null;
        }
    return(
        <View style={style.container}>
      <Text style={style.text}>{result.name}</Text>
      <FlatList 
       showsHorizontalScrollIndicator={false}
       horizontal
       data={result.photos}
       keyExtractor={(photo) => photo} 
       renderItem={({item}) => {
          return <Image style={style.image} source={ {uri:item} } />
      }} />
      <Text style={style.text}>Location</Text>
      <Text style={style.address}>{result.location.display_address[0]+" "+result.location.display_address[1]}</Text>
      <Text style={style.address}>Rating:-{result.rating}</Text>

        </View>
    )
}

const style=StyleSheet.create({
    text:{
      fontWeight:"bold",
      fontSize:22,
      marginLeft:15,
      
    },
    container:{
         marginTop:5,
         marginRight:15
    },
    image:{
        borderRadius:5,
        width:250,
        height:150,
        marginLeft:15,
        marginTop:10
    },
    address:{
        fontWeight:"400",
        fontSize:18,
        marginLeft:15
    }
})

export default ReasultShowScreen;