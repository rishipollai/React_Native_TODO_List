import React from 'react';
import { StyleSheet,Button, Text, View, ToastAndroid } from 'react-native';

const Displaylove =(props)=>{
   return(
      <View>
        <Text>percent</Text>
        <Text>result</Text>
        <Text>{props.data}</Text>
      </View>
   )
}

export default Displaylove;