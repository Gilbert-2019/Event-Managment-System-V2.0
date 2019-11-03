import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class Logo extends Component {
  render() {
    return (
	
	<View style={styles.imagecontainer}>
      <Image
          style={{width: 250, height: 200}}
          source={require('../images/logo3.png')}
        />
	</View>
    );
  }
}


const styles = StyleSheet.create({
	imagecontainer:{
		alignItems: "center" ,
		
	},
})