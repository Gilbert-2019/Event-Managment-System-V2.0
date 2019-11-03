import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class Quotes extends Component {
  render() {
    return (
	
	<View style={styles.imagecontainer}>
      <Image
          style={{width:200, height: 80}}
          source={require('../images/Quote.png')}
        />
	</View>
    );
  }
}


const styles = StyleSheet.create({
	imagecontainer:{
		top:'7%',
		paddingLeft:'8%',
		
	},
})