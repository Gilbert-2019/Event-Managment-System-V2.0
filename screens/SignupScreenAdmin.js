import React, { Component } from 'react';
import { Text, 
			View,
			StyleSheet,
			Image,
			TouchableOpacity,
			StatusBar,
			TextInput,
			Dimensions,	
			ScrollView,
			Picker,	
			} from 'react-native';
			
			
import Logo from '../components/logo';		

const{width : WIDTH} = Dimensions.get('window')
			

 class SignupScreenAdmin extends Component {
	 
	 static navigationOptions = {
		title : "ADMIN REGISTER"
	}
	 
	 
	 constructor(props){
			super (props);
				this.state={
				pickerSelection:'selectable'
							}
						}
	

			
  render() {
    return (

		
		<View style={styles.container}>
		<ScrollView>
		<StatusBar backgroundColor="#3700B3" barStyle="light-content" />
		
				
		<View style= {styles.alignItemsContainer}>
				<Text style= {styles.TextHeadingContainer}>Event Management System</Text>	
		</View>
				
				
		<Logo/>
		
		<View style= {styles.paddingTextInput}>
		
		
		
		<View style= {styles.alignItemsContainer}>
		<View style={styles.alignTextInput}>
			<TextInput style= {styles.TextInputContainer}
						placeholder={'User Name'}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		 
		 
		</View>
			
		<View style= {styles.alignItemsContainer}>
		<View style={styles.alignTextInput}>	
			<TextInput style= {styles.TextInputContainer}
						placeholder={'Email address'}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		</View>
		</View>
		
		<View style= {styles.alignItemsContainer}>
		<View style={styles.alignTextInput}>	
			<TextInput style= {styles.TextInputContainer}
						placeholder={'Mobile No:'}
						 keyboardType = 'numeric'
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		</View>
		</View>
				
		<View style={styles.alignTextInput}>		
		 <View stlye = {styles.alignInputContainer}>
			<TextInput style= {styles.TextInputContainer}
						placeholder={'Password'}
						secureTextEntry={true}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		 
				</View>
		</View>
		
		<View style={styles.alignTextInput}>		
		 <View stlye = {styles.alignInputContainer}>
			<TextInput style= {styles.TextInputContainer}
						placeholder={'Confirm Password'}
						secureTextEntry={true}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		 
				</View>
		</View>
		
		<View style= {styles.alignItemsContainer}>
		<View style={styles.alignTextInput}>	
			<TextInput style= {styles.TextInputContainer}
						placeholder={'Admin Registration no'}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		</View>
		</View>
		
		<View style= {styles.alignItemsContainer}>
		<View style={styles.alignTextInput}>	
			<TextInput style= {styles.TextInputContainer}
						placeholder={'Admin ID'}
						placeholderTextColor={'white'}
						underLineColorAndroid='transparent'
						/>
		</View>
		</View>
		
		
		<View style = {styles.alignItemsContainer}>
			<View style = {styles.alignTextInput}>
		<Text style={styles.buttonText}>Faculty of {this.state.pickerSelection}</Text>
				<TextInput style= {styles.TextInputContainer2}></TextInput>
				
			<Picker
				style={{backgroundcolor:'white', position:'absolute',bottom:0, left:15, right:0, top:30, color:'white', fontSize:10, }}
				selectedValue={this.state.pickerSelection}
				onValueChange={(itemValue, itemIndex) =>
					this.setState({pickerSelection: itemValue})
			}>
			
				<Picker.Item label="-Select the Faculty-" value="Faculty" />
				<Picker.Item label="Architecture" value="Architecture" />
				<Picker.Item label="I.T" value="I.T" />
				<Picker.Item label="Engineering" value="Engineering" />
				<Picker.Item label="Business" value="Business" />
				<Picker.Item label="Post Graduates" value="Post Graduates" />
			</Picker>
			
		</View>	
		</View>

		
		<View style = {styles.buttonalign}>						
					<TouchableOpacity style = {styles. Buttoncontainer}  onPress={() => this.props.navigation.navigate('VerificationSuccess')}>
						<Text style = {styles. buttonText2}>
						SignUp
						</Text>
					</TouchableOpacity>
					</View>		
				
			<View style = {styles.copyrightTextalign}>
			
				<TouchableOpacity onPress={() => this.props.navigation.navigate('LoginScreenAdmin')}>
			
					<Text style = {styles.copyrightText}>Already have an account ? | LogIn |</Text>
					
				</TouchableOpacity>
				
					</View>
				
				
			</View>	
			</View>
			
</ScrollView>

 
		</View>
		
			
    );
  }
}


export default SignupScreenAdmin;

const styles = StyleSheet.create({
	
	container : {
		backgroundColor:'#6200EE',
		flex: 1,

		
		
	},
	
	TextHeadingContainer : {
		color:'#FFFFFF', 
		justifyContent: "center",
		fontFamily:'BadScript-Regular',
		fontSize: 30,
		paddingTop:20,
		alignItems:'center',
	
	},
	
	alignInputContainer: {
		paddingTop:30,
	},
	
	
	
	TextInputContainer:{
		fontSize:13,
		fontFamily:'NewsCycle-Regular',
		width:WIDTH -90,
		borderRadius:10,
		borderWidth:1.5,
		borderColor:'#03DAC5',
		height:40,	
		paddingLeft:35,
		color:'white'
		
	},
	
	CheckBoxTextInputContainer:{
		fontFamily:'Montaga-Regular',
		fontSize:15,
		paddingRight:170,
		color:'white',
		paddingTop:10,
		
	},
	
	TextInputContainer2:{
		fontSize:13,
		width:WIDTH -90,
		borderRadius:10,
		borderWidth:1.5,
		borderColor:'#03DAC5',
		fontFamily:'NewsCycle-Regular',
		height:40,	
		paddingLeft:30,
		color:'white'
		
	},
	
		paddingTextInput:{
		paddingTop:30,
	},
	
	
	alignTextInput:{
		paddingTop:15,
	},
	
	alignItemsContainer:{
		alignItems:'center',
	},
	
	Buttoncontainer : {
		borderRadius:10,
		backgroundColor:'#03DAC5',
		height:40,
		justifyContent: "center",
		alignItems: "center" ,
		width:WIDTH - 190,
		
	},
	
	buttonalign:{
		
	paddingTop:60,
	
	},
	
	buttonText :{
		fontSize:15,
		fontFamily:'NewsCycle-Regular',
		color:'#FFFFFF'
	},
	
		buttonText2 :{
		fontFamily:'NewsCycle-Regular',
		fontSize:18,
		color:'#FFFFFF'
	},
	
	copyrightText: {
		fontFamily:'Pacifico-Regular',
		fontSize: 12,
		color:'#FFFFFF',
		
	
	},
	
	copyrightTextalign:{
	alignItems:'center',
	paddingTop:80,
	paddingBottom:20,
	
	},
	
		
	CheckBoxContainer:{
		color:'white'
	},
		
		
	

});