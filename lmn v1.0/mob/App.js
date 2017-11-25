import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Login from "./comp/Login";
import Unorganized from "./comp/UnorganizedComponent";
import CloudIcon from "./comp/CloudIcon";
import AddFolder from './comp/addFolder';
import AddMark from './comp/addMark';
import BookMarkRowComponent from './comp/BookMarkRowComponent';



export default class App extends React.Component {
    constructor(props){
        super(props);
      
        this.state = {
            page:"",
            idToken:"",
            accessToken:"",
            //cloud: ""
            
            
        }
    
    this.changePage = this.changePage.bind(this);
    this.setIdToken = this.setIdToken.bind(this);
    this.setAccessToken = this.setAccessToken.bind(this);
    //this.showCloud = this.showCloud.bind(this);
   
        
    }
    
    
changePage(data){
    this.setState({
        page:data
    })
}
    
setIdToken(data){
    this.setState({
        idToken:data
    })
    
//console.log("idToken " + data);
}
    
setAccessToken(data){
    this.setState({
        accessToken:data
    })

//console.log("acToken " + data);
}
    
//showCloud(bool){
//    this.setState({
//        cloud:bool
//    })
//}
        
  render() {
      
    var comp = null;
      
    if (this.state.page == ""){
        comp = <Login 
            changePage={this.changePage}
            setIdToken={this.setIdToken}
            setAccessToken={this.setAccessToken}
            signInCheck={this.signInCheck}
            />
    }
      
    else if (this.state.page == "unorganized"){
        comp = <Unorganized 
                idToken={this.state.idToken}
                accessToken={this.state.accessToken}  
                />
    }
      
    //var cloud = null;
      
//    if (this.state.cloud == "true"){
//        cloud = <CloudIcon />
//    }
      
      
    return (
      <View style={styles.container}>
        <Image source={require('./imgs/background.png')} style={styles.entireBg}
        />
        {comp}
       
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    entireBg:{
        flex:1,
        alignSelf:'stretch',
        position:'absolute',
    }
  
});
