import React, { Component } from 'react';
import { Text, 
			View,
			ImageBackground,
			StyleSheet,
			Image,
			TouchableOpacity,
			StatusBar,
			TextInput,
			Dimensions,		
			ScrollView,
			Button,
			Picker
							} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import TimePicker from "react-native-24h-timepicker";


import Menu from '../components/Menu';
import Quote from'../components/Quotes7';
import Phone from'../components/Phone';

var ImagePicker = require('react-native-image-picker');


				

const{width : WIDTH} = Dimensions.get('window')
			

 class RequestSelection extends Component {
	 static navigationOptions = {
		header : null
	}	

	
  render() {
    return (

		
		<View style={styles.container}>
		<ScrollView>
		<StatusBar backgroundColor="#3700B3" barStyle="light-content" />
		
		
		<View style={styles.RowFlexcontainer}>
		
		<TouchableOpacity onPress={() => this.props.navigation.navigate
			('AdminHomeScreen')}>
		<Menu/>
		</TouchableOpacity>
		
			

		
		</View>
		
		<View style={styles.TopImagecontainer}>
		<View style={styles.ImagerowContainer}>
		<Phone/>
		<Quote/>
		
		</View>
		</View>

		
		<View style={styles.Topcontainer}>

			<Text style={styles.itemTextcontainer}>Advertisment</Text>
			
			
			
		<View style = {styles.alignInputContainer}>
		<View style = {styles.TextInputContainer}>
				
		
		</View>

		</View>

        <View style = {styles.alignInputContainer}>
		<View style = {styles.TextInputContainer2}>
        <TextInput 
						placeholder={'Type Your Comment...!'}
						placeholderTextColor={'#a9a9a9'}
						underLineColorAndroid='transparent'
						/>
		
		</View>

		</View>
		
        
        <View style = {styles.alignInputContainer5}>
        <View style={styles.RowFlexcontainer}>
				<View style = {styles.buttonalign}>						
					<TouchableOpacity style = {styles. Buttoncontainer3} 
					>
						
						<Text style = {styles. buttonText2}>
						Accept
						</Text>
					</TouchableOpacity>
					</View>	

                    <View style = {styles.buttonalign2}>						
					<TouchableOpacity style = {styles. Buttoncontainer3} 
					>
						
						<Text style = {styles. buttonText2}>
						Decline
						</Text>
					</TouchableOpacity>
					</View>		
		
		</View>
        </View>
		
		
		
		</View>
		</ScrollView>
			

		</View>
		
			
    );
  }
}


export default RequestSelection;

const styles = StyleSheet.create({
	
	container : {
		backgroundColor:'#FFFFFF',
		flex: 1,
		
		
	},
	
	

	alignInputContainer: {
		paddingTop:'3%',
		alignItems:'center',
	
	},

	
	alignInputContainer5: {
		paddingTop:'3%',
        paddingLeft:'28%',
        paddingBottom:"5%"
	},

	TextInputContainer:{
		fontSize:13,
		fontFamily:'NewsCycle-Regular',
		width:WIDTH -90,
		borderRadius:10,
		borderWidth:1.5,
		borderColor:'#03DAC5',
		height:250,	
		paddingLeft:35,
		color:'white'
		
    },
    
    TextInputContainer2:{
		fontSize:13,
		fontFamily:'NewsCycle-Regular',
		width:WIDTH -90,
		borderRadius:5,
		borderWidth:1.5,
		borderColor:'#a9a9a9',
		height:100,	
		paddingLeft:5,
		color:'white'
		
	},



	
	Buttoncontainer3 : {
		width:WIDTH - 300,
		borderRadius:5,
		backgroundColor:'#03DAC5',
		height:35,
		justifyContent: "center",
		alignItems:'center',
		
	},
	
	buttonalign:{
		
	paddingTop:'1%',
	
    },
    
    buttonalign2:{
		
        paddingTop:'1%',
        left:"10%"
        
        },
	
	buttonText2 :{
		fontFamily:'NewsCycle-Regular',
		fontSize:15,
		borderColor:'#03DAC5',
		color:'#344955',
	},

	
	Topcontainer:{
		paddingTop:'3%',
	},
	

	TopImagecontainer:{
		paddingTop:'2%',
	},
	

	itemTextcontainer:{
		paddingLeft:'10%',
		paddingTop:'5%',
		fontFamily:'NewsCycle-Bold',
		fontSize: 18,
		color:'#344955',
		
	},
		ImagerowContainer:{
        flexDirection: 'row',
		paddingTop:'3%',
    },
	
	RowFlexcontainer:{
		flexDirection: 'row',
	},
		
	
	
		
		
	

});