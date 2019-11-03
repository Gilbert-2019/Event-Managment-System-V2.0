import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class Group1 extends Component {
  render() {
    return (
	
	<View style={styles.imagecontainer}>
      <Image
          style={{width: 180, height: 120}}
          source={require('../images/Group1.png')}
        />
	</View>
    );
  }
}


const styles = StyleSheet.create({
	imagecontainer:{

		//paddingTop:20,
		
	},
})