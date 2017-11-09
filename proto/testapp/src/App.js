import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCfjkiraoyFSRLC_XJivAkNvFAg25Qi5CY",
    authDomain: "testing-c8227.firebaseapp.com",
    databaseURL: "https://testing-c8227.firebaseio.com",
    projectId: "testing-c8227",
    storageBucket: "testing-c8227.appspot.com",
};

var firebaseApp = firebase.initializeApp(config);
//console.log(firebase);

//to connect firebase database to a variable
var database = firebase.database();

//making a reference to the database tree
var folderRef = database.ref('folder');
var bookmarkRef = database.ref('bookmarks');
var folderKeyRef = database.ref('unorganized');


/* 
var result = firebaseApp.database().ref('users');
result.orderByChild("bookmark").on('value', function(snapshot){} 
*/

// reference path to the database
var bmDisplay = bookmarkRef;
var fdDisplay = firebaseApp.database().ref('folder');

class App extends Component {
       
    constructor(props){
        super(props);
        
        this.state = {
            folderLists: [],
            bookmarkLists:[],
            folderNameDisplay: "bookmarkRef.folder_name",
            folderkey: "unorganized"
            
        
        }
        
    this.submitBookmark = this.submitBookmark.bind(this);
    this.removeBookmark = this.removeBookmark.bind(this);
    this.addFolder = this.addFolder.bind(this);
    this.removeFolder = this.removeFolder.bind(this);
    this.folderSelection = this.folderSelection.bind(this);
        
    
    }

//write the function to with equalTo() to filter to the folder_name and find its associating key
   
//ex. google firebase-retrieve-data-by-using-order-by-key and equal to
// google node screenshot by url
    

    componentDidMount(){
        var self = this;
        bmDisplay.on('child_added', function(snapshot){
            var bmTitle = snapshot.child("title").val();
            var bmURL = snapshot.child("url").val();
            var fkey = snapshot.child("folderkey").val();
            //console.log(snapshot.child("folderkey").val());
            
            var bookmarkArr = self.state.bookmarkLists;
            var obj = {
                title:bmTitle,
                url:bmURL,
                key:snapshot.key,
                index:bookmarkArr.length,
                folderkey: fkey
            }
            bookmarkArr.push(obj);
            self.setState({
                bookmarkLists: bookmarkArr
            })
            
            console.log(bookmarkArr);
            console.log("CDM done");
            //console.log(bookmarkArr);
            
        });
        
        fdDisplay.on('child_added', function(snapshot){

            var folder_name = snapshot.child("folder_name").val();

            var folderArr = self.state.folderLists;
            var obj = {
                folder_name:folder_name,
                key:snapshot.key,
                //index:folderArr.length
            }
            folderArr.push(obj);
            self.setState({
                folderLists: folderArr
            })
            console.log("fdDisplay done");
        });
        
        
//TRY PUTTING FUNCTIONS INTO STATE AS THEY WILL UPDATE "REALTIME"        
        
//        folderRef.child("folder").orderByChild("folder_name").equalTo(folderBtn.innerText).on("child_changed", function(snapshot){
//        
//        var folderBtn = document.getElementById("folderBtn");
//        console.log(snapshot.val());
  //});
        //console.log("done");
        //}); 
        
            //var deletedPost = snapshot.val();
  //console.log("The blog post titled '" + deletedPost.title + "' has been deleted");
//});
   }
    
submitBookmark(){
    var titleInput = document.getElementById("titleInput");
    var urlInput = document.getElementById("urlInput");
    //var dateadded = new Date();
    //var index = arr.length + 1;
    
    //ask henry
    if (titleInput != ""){
        if (urlInput != ""){
            var bookmark = {
            title: titleInput.value,
            url: urlInput.value,
            folderkey: folderKeyRef.key
            //index: index,
            //dateadded: new Date()
            }
    
            bookmarkRef.push(bookmark);
            console.log("bookmark sent");   
        }
        
        //else for urlInput    
        }
        //else for titleInput
        
    }
    
    
removeBookmark(key, index){
    console.log(key);
    //snapshot.ref().remove();
    bookmarkRef.child(key).remove();
    var bookmarkArr = this.state.bookmarkLists;
    bookmarkArr.splice(index, 1);
    this.setState({
        bookmarkLists: bookmarkArr
    })
}
    
addFolder(){
    
    var folderName = document.getElementById("folderName");
    
    var newFolder = {
        folder_name: folderName.value
        
    }
         
    folderRef.push(newFolder);
    
    console.log("folder added");
    
}
    
removeFolder(key, index){
    
    //filtering through bookmarks to find the matching bookmarks, and then delete them and the folder
    
    var filter = this.state.bookmarkLists.filter((obj, i)=>{
        
        return (obj.folderkey == key)
    });
    
    for(var i in filter){
        console.log(filter[i]);
        firebase.database().ref("bookmarks/"+filter[i].key).remove();
    }
    
    firebaseApp.database().ref("folder/"+key).remove();
    
    var folderArr = this.state.folderLists;
    folderArr.splice(index, 1);
    
    //console.log(folderArr);
    this.setState({
        folderLists: folderArr
    })
    
    
    /*var folderNameDisplay = document.getElementById("folderNameDisplay");
    folderNameDisplay.innerHTML = ""; */
}

    
folderSelection(key, index, name, snapshot){
    
folderKeyRef = database.ref("folder/"+key);
  
this.setState({
    folderkey: folderKeyRef.key
});
    /*for (var i = 0; i < this.state.bookmarkLists.length; i++){
        var matchKey = bookmarkRef.orderByChild("folderkey").equalTo(folderKeyRef.key);
        var listKey = this.state.bookmarkLists;
        
        if (listKey[i].folderkey === matchKey){
            this.state.newList.push(listKey[i]);
        }
    
    
        var newArr = this.state.newList;
    
        this.setState({
            bookmarkLists: newArr
        })
    
        console.log(matchKey);
    }*/
    
    //bookmarkRef.orderByChild("folderkey").equalTo(folderKeyRef.key)
        
        
/*        var bookmarkArr = self.state.bookmarkLists;
            var obj = {
                title:bmTitle,
                url:bmURL,
                key:snapshot.key,
                index:bookmarkArr.length
            }
            bookmarkArr.push(obj);
            self.setState({
                bookmarkLists: bookmarkArr
            })
*/
    
    console.log(name + " key: " + folderKeyRef.key);
    //console.log(bmDsiplay);
    
    var folderNameDisplay = document.getElementById("folderNameDisplay");
    folderNameDisplay.innerHTML = name; 
    
/*console.log(this.state.bookmarkLists);
//console.log(bmDisplay);
//console.log(folderKeyRef);
*/        
    
}
    
    
  
//grab user key and all the folders associated userkey, then all bookmarks associated to userkey, then sort by folder name
        
    
render(){
    //codes are for phantomjs!
    /* const screenShot = require('url-to-screenshot');
    const fs = require('fs');
    
    new screenShot('http://ghub.io/')
        .width(200)
        .height(300)
        .capture()
        .then (img =>
          fs.writeFileSync('${__dirname}/example.png', img)
        console.log('open example.png')            
    ) */
    
    var filter = this.state.bookmarkLists.filter((obj, i)=>{
        //console.log(this.state.folderkey, obj.folderkey);
        return (obj.folderkey == this.state.folderkey);
    })
    
    //console.log(filter);
    
    var showBookmark = filter.map((obj, i)=>{
        return (
            //ask about iframe one last time with henry
            <div key={i}>{obj.title} - <a href={obj.url}>{obj.url}</a><button onClick={this.removeBookmark.bind(this, obj.key, i)}>Remove</button></div>
            
        ) 
    });

    var showFolder = this.state.folderLists.map((obj, i)=>{
        return (
            
            <div key={i}><button id="folderBtn" onClick={this.folderSelection.bind(this, obj.key, i, obj.folder_name)}>{obj.folder_name}</button><button onClick={this.removeFolder.bind(this, obj.key, i)} >Remove</button> </div>
        ) 
    });
    
  return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Luminosity</h1>
            </header>
            <input type="text" id="titleInput" placeholder="title" />
            
      
            <input type="text" id="urlInput" placeholder="url" />


            <button onClick={this.submitBookmark}>Add Bookmark</button>
      
            <input type="text" id="folderName" placeholder="folder name" />
      
            <button onClick={this.addFolder}>Add Folder </button>
      
            <ul id="showFolder">
                {showFolder}
            </ul>
      
            <div id="folderNameDisplay">unorganized</div>
      
            <ul id="showBookmark">
                {showBookmark}
            </ul>
      
          </div>
        );
      }
    }


export default App;
