import React, { Component,createRef  } from 'react';
import { Text, 
			View,
			StyleSheet,
			Image,
			TouchableOpacity,
			StatusBar,
			TextInput,
			Dimensions,	
			ScrollView,
			

			
			} from 'react-native';
			
import CountDown from 'react-native-countdown-component';
import Icon from 'react-native-vector-icons/FontAwesome'			
import { useCallback } from 'react';
			
import PhoneInput from 'react-native-phone-input';
import CodeInput from 'react-native-confirmation-code-input';


const{width : WIDTH} = Dimensions.get('window')
			

 class StudentVerificationSuccess extends Component {
	
		
  render() {
    return   (

	
		<View style={styles.container}>
		<ScrollView>
		<StatusBar backgroundColor="#3700B3" barStyle="light-content" />

        <View style={styles.inputWrapper}>
                
    
    <CodeInput
      ref="codeInputRef2"
      keyboardType="numeric"
      codeLength={6}
	  activeColor='rgba(0,255,255,1)'
      inactiveColor='rgba(255, 0, 0, 1)'
      className='border-circle'
      compareWithCode='123456'
      autoFocus={false}
      codeInputStyle={{ fontWeight: '800' }}
      onFulfill={(isValid, code) => this.props.navigation.navigate('LoginScreen')}
    />
		  
		  <View style= {styles.paddingTextInput2}>
		  
		    <Text style={styles.inputSubLabel}>
            Didn't recieved? 
          </Text>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignupScreen')} >
		  <Text style={styles.inputSubLabe2}>Resend</Text>
         </TouchableOpacity>
        </View>
		</View>
		
<View style= {styles.paddingTextInput3}>		
			<CountDown
        until={60}
        onFinish={() => alert('Resend')}
        size={15}
		digitStyle={{backgroundColor: '#6200EE'}}
        digitTxtStyle={{color: '#d3d3d3'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
      />
	 </View>

		
		
		<View style= {styles.paddingTextInput}>

		<View style= {styles.alignItemsContainer}>
						

		
		
		
		<View style = {styles.buttonalign}>						
					<TouchableOpacity style = {styles. Buttoncontainer}  onPress={() => this.props.navigation.navigate('LoginScreen')}>
						<Text style = {styles. buttonText2}>
						Verify
						</Text>
					</TouchableOpacity>
					</View>		
				
			
				
				
			</View>	
			</View>
			</ScrollView>

 
		</View>
		
			
    );
  }
}


export default StudentVerificationSuccess;

const styles = StyleSheet.create({
	
	container : {
		backgroundColor:'#6200EE',
		flex: 1,

		
		
	},
	
	TextHeadingContainer : {
		color:'#000000', 
		justifyContent: "center",
		fontFamily:'BadScript-Regular',
		fontSize: 30,
		paddingTop:20,
		alignItems:'center',
	
	},
	
	alignInputContainer: {
		paddingTop:30,
	},
	
	RowFlexcontainer:{
		flexDirection: 'row',
	},
	
	
	TextInputContainer:{
		fontSize:13,
		fontFamily:'NewsCycle-Regular',

		
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
		height:50,	
		paddingLeft:30,
		color:'white'
		
	},
	
		paddingTextInput:{
		paddingTop:0.2,
	},
	
	paddingTextInput2:{
		flexDirection: 'row',
		paddingTop:"20%",
	},
	
	paddingTextInput3:{
		paddingTop:5,
	},

	
	
	alignTextInput:{
		paddingTop:15,
	},
	
	alignItemsContainer:{
		alignItems:'center',
	},
	
	alignPhoneinputContainer:{
		paddingLeft:"10%",
		paddingTop:"5%"

		
	},
	
	Buttoncontainer : {
		width:WIDTH - 190,
		borderRadius:10,
		backgroundColor:'#03DAC5',
		height:40,
		justifyContent: "center",
		alignItems: "center" ,
		
	},
	
	buttonalign:{
		
	paddingTop:30,
	
	},
	
	pad:{
		paddingTop:5
	},
	
	buttonText :{
		fontSize:15,
		fontFamily:'NewsCycle-Regular',
		color:'#FFFFFF'
	},
	
		buttonText2 :{
		fontFamily:'Poppins-Regular',
		fontSize:18,
		color:'#FFFFFF'
	},
	
	copyrightText: {
		fontFamily:'Pacifico-Regular',
		fontSize: 12,
		color:'#a9a9a9',
		
	
	},
	
	copyrightText2: {
		fontFamily:'Pacifico-Regular',
		fontSize: 12,
		color:'#d3d3d3',
		
	
	},
	
	copyrightTextalign:{
	alignItems:'center',
	paddingTop:"2%",
	paddingBottom:20,
	
	},
	
	  linearGradient: {
    minHeight: 555,
  },
  inputWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
	paddingTop:"10%"
  },
  inputLabel: {
    paddingTop: 30,
    paddingBottom: 10,
    color: '#000000',
    fontSize: 25,
    fontWeight: '700',
	fontFamily:'Poppins-SemiBold'
  },
  inputSubLabel: {
    color: '#a9a9a9',
	fontSize: 15,
	
  },
    inputSubLabe2: {
    color: '#a9a9a9',
	fontSize: 15,
	textDecorationLine: 'underline'
  },
  inputWrapStyle: {
    height: 50,
    marginTop: 30,
  },
  input: {
    height: 40,
    width: 40,
    borderRadius: 3,
    backgroundColor: 'rgba(211,211,211,0.3)',
  },
  inputNotEmpty: {
    backgroundColor: 'rgba(0,0,0,0)',
  },
  
  nextButtonArrow: {
    transform: [{ translateX: -3 }, { rotate: '45deg' }],
    borderColor: '#ff595f',
    width: 20,
    height: 20,
    borderWidth: 4,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
	
		
	

});