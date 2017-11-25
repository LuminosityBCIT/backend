/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { ListView, StyleSheet, Text, View, Image, TouchableHighlight, Button, TouchableOpacity, TextInput, WebView, ScrollView, NativeModules, LayoutAnimation,} from 'react-native';

const { UIManager } = NativeModules;

export default class CloudIcon extends Component<{}> {

    cloudOnPress = () => {
        if(this.state.cloudbuts == true) { 
            this.state.cloudbuts = false;    
            LayoutAnimation.spring();
            this.setState({t11: this.state.t11 = 112, l11: this.state.l11 = 113})
            this.setState({t22: this.state.t22 = 71, l22: this.state.l22 = 113})
            this.setState({t33: this.state.t33 = 30, l33: this.state.l33 = 113})
            this.setState({t44: this.state.t44 = -10, l44: this.state.l44 = 113})
            this.setState({w: this.state.w = 0, h: this.state.h = 0})
        }
        else { 
            this.state.cloudbuts = true;    
            LayoutAnimation.spring();
            this.setState({t11: this.state.t11 = 0, l11: this.state.l11 = 130})
            this.setState({t22: this.state.t22 = -15, l22: this.state.l22 = 70})
            this.setState({t33: this.state.t33 = -10, l33: this.state.l33 = 25})
            this.setState({t44: this.state.t44 = 10, l44: this.state.l44 = 0})
            this.setState({w: this.state.w = 40, h: this.state.h = 40})
        }  
    }
    
    
    callFun = () =>
    {
        alert("Image Clicked!!!");
    }

    changeWindowsShow = (bool) => 
    {
        var arg = bool;
        this.setState({changeWindows:arg});
    }

    

//    titlefunction = (text) =>
//    {
//        var titleFrom =text;
//        this.setState({
//            titleValue:titleFrom
//        });
//    }
//
//    urlfunction = (text) =>
//    {
//        var urlFrom = text;
//        this.setState({
//            urlValue:urlFrom
//        });
//    }
//
//
//    folderfunction = (text) =>
//    {
//        var folderFrom = text;
//        this.setState({
//            folderValue:folderFrom
//        });
//    }
    
    constructor(props) {
        super(props);
        
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            folderLists: [],            
            titleValue:"",
            urlValue:"",
            folderValue:"",
            currentUser: null,
            dataSource: null,
            dataSource: ds,
            t11: 0,
            l11: 130,
            t22: -15,
            l22: 70,
            t33: -10,
            l33: 25,
            t44: 10,
            l44: 0,
            w: 40,
            h: 40,
            cloudbuts:true,
            burgerl: "5%",
            burgerw: "90%",
            sideDivl: "-60%",
            burgerbuts:true,
            changeWindows:1,
            fbDatabase: null
        };
    }
    
    componentWillMount() {
        //this.listenForAuth()
    }

    componentDidMount()
    {
//        this.state.burgerbuts = true;
//        this.setState({burgerl: this.state.burgerl = "5%"})
//        this.setState({burgerw: this.state.burgerw = "90%"})
//        this.setState({sideDivl: this.state.sideDivl = "-60%"})
//        
//
//    //
//    //  Reference
//    //  https://stackoverflow.com/questions/43019528/react-native-firebase-onauthstatechanged 
//    //
////    listenForAuth() {
////        this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
////            if (user) {
////                this.setState({
////                    currentUser: user
////                })
////            } 
////        })
    }
    
render() {

     var windowDisplay = null;

        if(this.state.changeWindows == 1){
              windowDisplay = null
        }else if(this.state.changeWindows == 2){
             windowDisplay = (
              <View
 style={styles.containerAdd}>
    
        
   <View
    style={styles.containerDiv}>
        
                <Text style={styles.addMarkText}>
                 Add Folder</Text>
        
                <View style={styles.addMarkPic1}> 
                     <Image style={styles.addTitle}
                      source={require('../imgs/title.png')}/>
                     <View
                      style={styles.addMarkInp2}>
                           <TextInput
                            style={styles.addMarkInp}  
                            type="text" 
                            onChangeText={this.folderfunction}  
                            placeholder="folder name"
                            value={this.state.text}/>
                     </View>   
                </View>

                <View style={styles.addMarkPic2}>  
                     <Image style={styles.addChoose}
                      source={require('../imgs/Choose.png')}/>
                    <CheckBox
                     label='Main Folder'
                     /> 
                </View>

                <View style={styles.addMarkPic2}> 
                     <Text style={styles.subFolde}></Text>      
                     <CheckBox 
                      label='Sub Folder'
                      />
                 </View>
            
                 <View
                  style={styles.containerDivButs}>                      
                        <TouchableHighlight
                         style={styles.containerDivBut1}
                         onPress ={this.changeWindowsShow.bind(this,1)}>
                             <Text style={styles.containerDivButText}>
                             Cancel</Text>
                        </TouchableHighlight> 

                        <TouchableHighlight
                         style={styles.containerDivBut2}
                         onPress={this.addFolder}>
                             <Text style={styles.containerDivButText}>
                              Save</Text>
                        </TouchableHighlight> 
                  </View>
  
   </View>
        
                          
</View>
              ) 
        }else if(this.state.changeWindows == 3){
             windowDisplay = (

            <View style={styles.containerAdd}>
                <View style={styles.containerDiv}>
                    <Text style={styles.addMarkText}>
                    Add Bookmark</Text>

                    <View style={styles.addMarkPic1}> 
                        <Image style={styles.addTitle} source={require('../imgs/title.png')}/>
                        <View style={styles.addMarkInp2}>
                            <TextInput
                            style={styles.addMarkInp}  
                            type="text" 
                            onChangeText={this.titlefunction} 
                            placeholder="title"
                            value={this.state.text}/>
                        </View>   
                    </View>

                    <View style={styles.addMarkPic1}>  
                        <Image style={styles.addFolder}
                        source={require('../imgs/folder.png')}/>
                        <View style={styles.addMarkPic}>   
                    </View>
                </View>

                <View style={styles.addMarkPic1}>   
                    <Image style={styles.addSubFolder}
                    source={require('../imgs/subFolder.png')}/>
                    <View style={styles.addMarkPic}>  
                        <TextInput type="text" onChangeText={this.urlfunction} placeholder="url" />
                    </View>
                </View>

                <View
                style={styles.containerDivButs}>                      
                    <TouchableHighlight
                    style={styles.containerDivBut1}
                    onPress ={this.changeWindowsShow.bind(this,1)}>
                    <Text style={styles.containerDivButText}>
                    Cancel</Text>
                    </TouchableHighlight> 

                    <TouchableHighlight
                    style={styles.containerDivBut2}
                    onPress={this.submitBookmark}>
                    <Text style={styles.containerDivButText}>
                    Save</Text>
                    </TouchableHighlight> 
                </View>

            </View>
            </View>
              ) 
        }   

   var showFolder = this.state.folderLists.map((obj, i)=>{
    
        return (            
    <View style={styles.sidedivPic} key={i}>
        <View style={styles.sidedivSubPic}>   
            <TouchableHighlight
            underlayColor={"#FFCC33"}
            style={styles.bmfBut}
            id="folderBtn" onPress={this.folderSelection.bind(this, obj.key, i, obj.folder_name)}>
            <Text style={styles.folderText}>{obj.child("folder_name").val()} </Text>
            </TouchableHighlight>
            <Button title={"X"}  onPress={this.removeFolder.bind(this, obj.key, i)}/>
         </View>                                      
    </View>
        ) 
    });

    //
    //  React-native simple listview implementation reference:
    //  https://medium.com/differential/react-native-basics-how-to-use-the-listview-component-a0ec44cf1fe8
    //
    return (
    <View style={styles.container}>
    
        <View style={styles.containerHead}>  

            <TouchableOpacity
            onPress ={this.changeWindowsShow.bind(this,3)}
            activeOpacity={1}   
            style={[styles.butCloud11, {top: this.state.t11, left: this.state.l11}]}>
                <Image
                style={[styles.butCloud1, {width: this.state.w, height: this.state.h}]} 
                source={require('../imgs/bmkBut.png')}/>           
            </TouchableOpacity>                

            <TouchableOpacity
            onPress={ this.callFun }
            activeOpacity={1}   
            style={[styles.butCloud22, {top: this.state.t22, left: this.state.l22}]} >
                <Image        
                style={[styles.butCloud2, {width: this.state.w, height: this.state.h}]} 
                source={require('../imgs/chcBut.png')}/> 
            </TouchableOpacity> 
                        
            <TouchableOpacity 
            onPress ={this.changeWindowsShow.bind(this,2)}
            activeOpacity={1}   
            style={[styles.butCloud33, {top: this.state.t33, left: this.state.l33}]} >                  
                <Image
                style={[styles.butCloud3, {width: this.state.w, height: this.state.h}]} 
                source={require('../imgs/pluBut.png')}/>
            </TouchableOpacity> 
                        
            <TouchableOpacity
            onPress={ this.callFun }
            activeOpacity={1}   
            style={[styles.butCloud44, {top: this.state.t44, left: this.state.l44}]} >               
                <Image
                style={[styles.butCloud4, {width: this.state.w, height: this.state.h}]} 
                source={require('../imgs/schBut.png')}/>
            </TouchableOpacity> 

            <TouchableOpacity 
            onPress={this.cloudOnPress} 
            activeOpacity={1}     
            style={styles.butCloud00}>                
                <Image
                style={styles.butCloud0}
                source={require('../imgs/cluBut.png')}/>  
            </TouchableOpacity>
        </View>   
        {windowDisplay}     
    </View>
    );
  }
};



const styles = StyleSheet.create({
benben: {
        position:"absolute",
        top:0,
        left:0,
        flex: 1,
        width: "10%",
        height: "10%",
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
},    
    
  container: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor:'transparent',
        justifyContent: 'center',
        flexDirection: 'column',
},
    
 
homeBut:{
        width:100,
        height:24,
},    
    
    
homeBut2:{
        width:100,
        height:24,
        top:22,  
},

     
    
butImg2:{
         position: "relative",
         right:70,
         top:20,
         height:32,
         width:32,
},
    
butImg:{ 
         height:32,
         width:32,    
},
    
butSear2:{
          position: "relative",
          left:70,
          top:20,
          height:32,
          width:32,
},
    
butSear:{
         height:32,
         width:32,    
},
  
containerHead:{
         position: 'absolute',
         bottom:0,
         right:0,  
         height:175,
         width:175,   
},
    
butCloud0:{
         top:0,
         left:0,
         height:80,
         width:70, 
},
    
butCloud1:{
         top:0,
         left:0,
         height:40,
         width:40,    
},
       
butCloud2:{
         top:0,
         left:0,
         height:40,
         width:40,    
},
    
butCloud3:{
         top:0,
         left:0,
         height:40,
         width:40,    
},
    
butCloud4:{ 
         top:0,
         left:0,
         height:40,
         width:40,   
},
    
butCloud00:{
        opacity: 1.0,
         bottom:70,
         left:100,
         height:80,
         width:70, 
},
    
butCloud11:{
         position: "relative",
         top:0,
         left:130,
         height:40,
         width:40,   
},
    
butCloud22:{
         position: "relative",
         top:-15,
         left:70,
         height:40,
         width:40,    
},
    
butCloud33:{
         position: "relative",
         top:-10,
         left:25,
         height:40,
         width:40,    
},
    
butCloud44:{
         top:10,
         left:0,
         height:40,
         width:40,   
},
    
   
sidediv:{
         position: 'absolute',
         
         top:70,
         height:"100%",
         width:"60%",
         bottom:0,
         backgroundColor:'white',
         shadowColor: '#000',
         shadowOffset: { width: 5, height: 0 },
         shadowOpacity: 0.1,
         shadowRadius: 10,   
  }, 
  
markView:{
         top:40,
         height:"80%",
       
         flexDirection: 'column',
},
    
markView2:{
         flexDirection: 'column',
         height:"100%",
         width:"100%",
         left:0,
},    
      
markGalleryDisplay:{
         height:"30%",
         width:"100%",
        
}, 
    
markGalleryText:{
         marginTop: 10, 
},
    
markImg:{
         width:"100%",
         height:180,
          marginTop: 10, 
         marginBottom:30,
}, 
    
sidedivPic:{
        left:"30%",
        width:"70%",
       
     
},   
    

    
    
    
containerAdd: {
        position:"absolute",
        top:0,
        left:0,
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
},

containerDiv: {  
       
        width: "90%",
        height: 450,
        backgroundColor:"white",
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#787878',
},
    
    //add folder    
    
addMarkText: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor:"white",
        marginTop:60,
        marginBottom:20,
},
    
addMarkPic1: {
       marginTop: 20,
       marginBottom: 20,
       width: "80%",
       height: 50,
       flexDirection: 'row',
},
    
addMarkPic2: {
       marginTop: 20,
       width: "78%",
       height: 50,
       flexDirection: 'row',
},    
    
addMarkPic: {
       left:0,
       width: "78%",
       height: "100%",
       marginBottom:20,
       borderRadius: 4,
       borderWidth: 2,
       borderColor: '#787878',
},    
    
    
addTitle: {
       marginTop: 15, 
       marginLeft: 0,
       width: 40,
       height: 14,
       margin:10,
},       
    
addChoose: {
       marginTop: 4, 
       marginLeft: 0,
       width: 70,
       height: 14,
       margin:10,
},           
    
addFolder: {
       width: 40,
       height: 30,
       margin:10,
       marginLeft: 0,
},   
    
addSubFolder: {
       width: 40,
      height: 22,
       margin:10,
     marginLeft: 0,
},     
    
    
    
addMarkInp: {  
       margin:5,
       marginTop:10,
       color: 'gray',
}, 

addMarkInp2: {
       width: "78%",
       height: 50,
       marginBottom:20,
       borderRadius: 4,
        borderWidth: 2,
        borderColor: '#787878',
},   

subFolde: {
     
       marginLeft:80,
     
},       

containerDivButs: {
        top:"5%",
        width: "90%",
        height: "10%",
},

containerDivBut1: {
        position: "relative",
        top:0,
        left:"10%",
        backgroundColor:"#FF6633",
        width: "30%",
        height: "100%",
        borderRadius: 10,
},
    
containerDivBut2: {
        position: "relative",
        top:"-100%",
        left:"60%",
        backgroundColor:"#3399FF",
        width: "30%",
        height: "100%",
        borderRadius: 10,
}, 
    
containerDivButText:{
        fontSize: 20,
        fontWeight: 'bold',
        color:"white",
        alignSelf:"center",
        marginTop: 9, 
},        
    
// add Mark
    
containerAdd: {
        position:"absolute",
        top:0,
        left:0,
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
},

containerDiv: {  
       
        width: "90%",
        height: 450,
        backgroundColor:"white",
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#787878',
},
    
    
    
    
addMarkText: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor:"white",
        marginTop:60,
        marginBottom:20,
},
    
addMarkPic1: {
      marginTop: 20,
       width: "80%",
       height: 50,
       flexDirection: 'row',
},
    
addMarkPic: {
       left:0,
       width: "78%",
       height: "100%",
       marginBottom:20,
       borderRadius: 4,
       borderWidth: 2,
       borderColor: '#787878',
},    
    
    
addTitle: {
       marginTop: 15, 
       marginLeft: 0,
       width: 40,
       height: 14,
       margin:10,
},       
    
addFolder: {
       width: 40,
       height: 30,
       margin:10,
       marginLeft: 0,
},   
    
addSubFolder: {
       width: 40,
      height: 22,
       margin:10,
     marginLeft: 0,
},     
    
    
    
addMarkInp: {  
       margin:5,
       marginTop:10,
       color: 'gray',
}, 

addMarkInp2: {
       width: "78%",
       height: 50,
       marginBottom:20,
       borderRadius: 4,
        borderWidth: 2,
        borderColor: '#787878',
},     

containerDivButs: {
        top:"5%",
        width: "90%",
        height: "10%",
},

containerDivBut1: {
        position: "relative",
        top:0,
        left:"10%",
        backgroundColor:"#FF6633",
        width: "30%",
        height: "100%",
        borderRadius: 10,
},
    
containerDivBut2: {
        position: "relative",
        top:"-100%",
        left:"60%",
        backgroundColor:"#3399FF",
        width: "30%",
        height: "100%",
        borderRadius: 10,
}, 
    
containerDivButText:{
        fontSize: 20,
        fontWeight: 'bold',
        color:"white",
        alignSelf:"center",
        marginTop: 9, 
},
bmfBut:{
    
  
   backgroundColor:"#3399FF",
   width: "80%",
   height:50,
   top:"5%",
   alignItems: "center",
 
},
sidedivSubPic:{
         marginTop:5,
        flexDirection: "row",
},    
    
markGallerySubDisplay:{ 
        flexDirection: "row",
         backgroundColor:"#f1f1f1",
    
    
},        
    
folderText:{
    marginTop:15,
    color: "white"
}
});
