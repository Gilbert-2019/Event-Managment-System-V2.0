import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class WelcomeLogo extends Component {
  render() {
    return (
	
	<View style={styles.imagecontainer}>
      <Image
          style={{width: 370, height: 320}}
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