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
import { useCallback } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome'				
import PhoneInput from 'react-native-phone-input';
import CodeInput from 'react-native-confirmation-code-field';
import CodeFiled from 'react-native-confirmation-code-field';
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
import CodeInput from 'react-native-confirmation-code-field';
import CodeFiled from 'react-native-confirmation-code-field';


const{width : WIDTH} = Dimensions.get('window')
			

 class Verification extends Component {
	
nFinishCheckingCode = code => {
    if (code !== '123456') {
      return Alert.alert(
        'Confirmation Code',
        'Code not match!',
        [{ text: 'OK' }],
        {
          cancelable: false,
        },
      );
    }

    Alert.alert('Confirmation Code', 'Successful!', [{ text: 'OK' }], {
      cancelable: false,
    });
  };

  cellProps = ({ /*index, isFocused,*/ hasValue }) => {
    if (hasValue) {
      return {
        style: [styles.input, styles.inputNotEmpty],
      };
    }
    return {
      style: styles.input,
    };
  };
  
  containerProps = { style: styles.inputWrapStyle };

			
  render() {
    return   (

	
		<View style={styles.container}>
		<ScrollView>
		<StatusBar backgroundColor="#d3d3d3" barStyle="light-content" />

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Please enter your phone {'\n'}
				verification code</Text>
        
          <CodeFiled
            variant="clear"
            codeLength={6}
            compareWithCode="123456"
            keyboardType="numeric"
            cellProps={this.cellProps}
            containerProps={this.containerProps}
            onFulfill={this.onFinishCheckingCode} 
			
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
		digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#d3d3d3'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
      />
	 </View>

		
		
		<View style= {styles.paddingTextInput}>

		<View style= {styles.alignItemsContainer}>
						

		
		
		
		<View style = {styles.buttonalign}>						
					<TouchableOpacity style = {styles. Buttoncontainer}  onPress={() => this.props.navigation.navigate('VerificationSuccess')}>
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


export default Verification;

const styles = StyleSheet.create({
	
	container : {
		backgroundColor:'#FFFFFF',
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
		paddingTop:20,
	},
	
	paddingTextInput3:{
		paddingTop:0.2,
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
		width:WIDTH - 70,
		borderRadius:50,
		backgroundColor:'#37BF91',
		height:50,
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
  nextButton: {
    marginTop: 100,
    width: 70,
    height: 70,
    borderRadius: 80,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
    alignItems: 'center',
    justifyContent: 'center',
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

const{width : WIDTH} = Dimensions.get('window')
			

 class UserVerification extends Component {
	
nFinishCheckingCode = code => {
    if (code !== '123456') {
      return Alert.alert(
        'Confirmation Code',
        'Code not match!',
        [{ text: 'OK' }],
        {
          cancelable: false,
        },
      );
    }

    Alert.alert('Confirmation Code', 'Successful!', [{ text: 'OK' }], {
      cancelable: false,
    });
  };

  cellProps = ({ /*index, isFocused,*/ hasValue }) => {
    if (hasValue) {
      return {
        style: [styles.input, styles.inputNotEmpty],
      };
    }
    return {
      style: styles.input,
    };
  };
  
  containerProps = { style: styles.inputWrapStyle };

			
  render() {
    return   (

	
		<View style={styles.container}>
		<ScrollView>
		<StatusBar backgroundColor="#d3d3d3" barStyle="light-content" />

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Please enter your phone {'\n'}
				verification code</Text>
        
          <CodeFiled
            variant="clear"
            codeLength={6}
            compareWithCode="123456"
            keyboardType="numeric"
            cellProps={this.cellProps}
            containerProps={this.containerProps}
            onFulfill={this.onFinishCheckingCode} 
			
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
		digitStyle={{backgroundColor: '#FFF'}}
        digitTxtStyle={{color: '#d3d3d3'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: null, s: null}}
      />
	 </View>

		
		
		<View style= {styles.paddingTextInput}>

		<View style= {styles.alignItemsContainer}>
						

		
		
		
		<View style = {styles.buttonalign}>						
					<TouchableOpacity style = {styles. Buttoncontainer}  onPress={() => this.props.navigation.navigate('VerificationSuccess')}>
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


export default UserVerification;

const styles = StyleSheet.create({
	
	container : {
		backgroundColor:'#FFFFFF',
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
		paddingTop:20,
	},
	
	paddingTextInput3:{
		paddingTop:0.2,
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
		width:WIDTH - 70,
		borderRadius:50,
		backgroundColor:'#37BF91',
		height:50,
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
  nextButton: {
    marginTop: 100,
    width: 70,
    height: 70,
    borderRadius: 80,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 5,
      },
    }),
    alignItems: 'center',
    justifyContent: 'center',
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