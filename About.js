import *as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const About = ({navigation}) => {
    return(
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}} >
          <Text>About Screen</Text>
          <Button title='Go to Album'
          onPress={()=>navigation.navigate('Album')}/>
          <Button title='Go to Home'
          onPress={()=>navigation.navigate('Home')}/>
        </View>
      );
};

export default About;