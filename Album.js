import *as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Album = ({navigation}) => {
    return(
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}} >
          <Text>Foto Saya</Text>
          <Button title='Go Back'
          onPress={()=>navigation.navigate('About')}/>
        </View>
      );
};

export default Album;