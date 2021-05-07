import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity, Alert} from 'react-native';
import firebase from 'firebase'
import db from "../config"
export default class Welcome extends React.Component{
    
    constructor(){
        super()
        this.state = {
            username : '',
            password : ''
        }

    }
    sign=(username , password)=>{
        if (username&&password){
        firebase.auth().createUserWithEmailAndPassword(username , password)
        .then((Response)=>{
             return Alert.alert(' User has Entered ')
        })
        .catch(function(error){
            var code = error.code
            var msg = error.message
             return Alert.alert(msg)
        })
        }
    }

    login=(username , password)=>{
        if (username&&password){
        firebase.auth().signInWithEmailAndPassword(username,password)
        .then((Response)=>{
             return Alert.alert(' User has Entered ')
        })
        .catch(function(error){
            var code = error.code
            var msg = error.message
             return Alert.alert(msg)
        })
        }
    }
    
    render(){
        return (
          <View style={styles.container}>
            <Text style = {{
              fontWeight : "BOLD ",
              fontSize : 45 ,
              alignSelf  : 'center',
       marginTop : 15 
            }}>Book Santa</Text>

            <TextInput style = {{
                borderWidth :    5, 
                marginTop : 30 ,
                textAlign : "center"
            }} placeholder = "UserName "
            onChangeText={(text)=>{
                this.setState({
                  username:text
                })
              }}/>
             
            
            <TextInput style = {{
                borderWidth :    5, 
                marginTop : 40 ,
                textAlign : "center"
            }} placeholder = "Password "
            secureTextEntry = {true}
            onChangeText={(text)=>{
                this.setState({
                  password:text
                })
              }}
            />
          <TouchableOpacity onPress = {()=>{this.sign(this.state.username , this.state.password )}}style={{
            borderWidth: 5,
            width: 80,
            height: 30,
            borderRadius: 500,
            backgroundColor: 'grey',
            borderColor: 'black',
            alignItems: 'center',
            marginTop: 33,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
              <Text>Sign Up</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress = {()=>{ this.login(this.state.username , this.state.password)}} style={{
            borderWidth: 5,
            width: 80,
            height: 30,
            borderRadius: 500,
            backgroundColor: 'grey',
            borderColor: 'black',
            alignItems: 'center',
            marginTop: 43,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
              <Text>Log in</Text>
              </TouchableOpacity>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
  