import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet } from "react-native";
import foto from './gambar.jpg';
import { style } from "./stlye";

const App = () => {
  return (
    <View style={style.Container}>
      <View style={style.bagian1}>
          <View style={style.bagian11}>
            <Image source={{uri:'http://placeimg.com/100/100/arch'}} style={{width:100, height:100}}></Image>
          </View>
          <View style={style.bagian12}>
            <Text style={style.tulisan1}>David Fathurrahman!!!</Text>
          </View>
          <View style={style.bagian11}>
           
          </View>
          <View style={style.bagian11}></View>
          <View style={style.bagian11}></View>
      </View>
      <View style={style.bagian2}></View>
      <View style={style.bagian1}>
        <View style={style.bagian11}></View>
        <View style={style.bagian12}>
          <TextInput style={{backgroundColor:'white'}}></TextInput>
        </View>
        <View style={style.bagian11}></View>
      </View>
  
    </View>
  );
}

const Texs =() =>{
  return(
    <Text>Hello world !!!</Text>
  )
}

const Photo = () =>{
  return(
    <Image source={foto} style={{width:200, height:200}}/>
  )
}

const Tampilan =() =>{
  return(
    <View style={{width:100, height:100, backgroundColor:'red'}}/>
  )
}

class Tulisan extends Component{
  render() {
    return(
      <Text>Tampilan Dari Komponen Class</Text>
    )
  }
}

class Photoku extends Component{
  render() {
    return(
      <Image source={{uri:'https://placeimg.com/100/100/tech'}}  style ={{width:200, height:200}}/>
    )
  }
} 

export default App;