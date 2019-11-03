import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class Group2 extends Component {
  render() {
    return (
	
	<View style={styles.imagecontainer}>
      <Image
          style={{width: 180, height: 120}}
          source={require('../images/Group2.png')}
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