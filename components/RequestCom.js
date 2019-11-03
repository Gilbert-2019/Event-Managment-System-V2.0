import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, } from 'react-native';

export default class RequestCom extends Component {
  render() {
    return (
	
	<View style={styles.imagecontainer}>
      <Image
          style={{width: 310, height: 130}}
          source={require('../images/Request.png')}
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