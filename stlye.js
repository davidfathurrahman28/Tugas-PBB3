import { StyleSheet } from "react-native";

const style=StyleSheet.create({
    Container:{
      flex:1,
      backgroundColor:'red'
    },
    bagian1:{
         flex:1,
         flexDirection:'row',
         backgroundColor:'white'
    },
    bagian11:{
      flex:1,
      backgroundColor: 'red',
      borderWidth:3
    },
    bagian12:{
      flex:5,
      backgroundColor:'blue'
    },
     bagian2:{
        flex:10,
        backgroundColor:'gray'
    },
    tulisanku: {
      marginTop:15,
      paddingVertical:8,
      borderWidth:3,
      fontSize:20
  
    },
    tulisan1:{
      paddingmarginTop:10,
      textAlign: "center",
      
      fontSize:20
    }
  });

  export{style};