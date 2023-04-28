import React from "react";
import {View,Image,Text,StyleSheet} from 'react-native'

const ResultDetail = ({result}) => {
    return (       
     <View style={style.container}>
          <Image  style= {style.image} source={{uri:result.image_url}}/>
          <Text   style={style.title}>{result.name}</Text>
          <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
     </View>
    )
    
}

const style  = StyleSheet.create({
    container:{
        marginLeft:15
    },
    image:{
        width:250,
        height:150,
        borderRadius:4,
        marginBottom:5
    },
    title:{ 
        fontWeight:"bold"
    },


})
export default ResultDetail;