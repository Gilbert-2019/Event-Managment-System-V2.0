import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class Quotes extends Component {
  render() {
    return (
	
	<View style={styles.imagecontainer}>
      <Image
          style={{width:250, height: 70}}
          source={require('../images/Quotes4.png')}
        />
	</View>
    );
  }
}


const styles = StyleSheet.create({
	imagecontainer:{
		top:'8%',
		paddingLeft:'3%',
		
	},
})