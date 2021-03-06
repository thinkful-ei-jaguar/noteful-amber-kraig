import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
//import SideBar from "./Sidebar";
import SidebarContext from "./SidebarContext";
//import Main from "./Main";
import MainContext from "./MainContext";
import Header from "./Header";
import "./App.css";
import NotePage from "./NotePage";
import SidebarFolder from "./SidebarFolder";
// import NoteList from './NoteList';
import FolderPage from "./FolderPage";
import AddFolder from "./AddFolder";
import NotefulContext from "./NotefulContext";
import AddNote from './AddNote';
import Errors from './Errors'

class AppContext extends Component {
  constructor() {
    super();

    this.state = {
      folders: [],
      notes: []
    };
    this.addFolder = React.createRef();
    this.addNote = React.createRef();
  }

  componentDidMount() {
    this.reloadPage()
  }

reloadPage =()=>{
  return Promise.all([
    fetch('https://kraig-noteful-api.herokuapp.com/api/folders'),
    fetch('https://kraig-noteful-api.herokuapp.com/api/notes')
   
  ])

    .then(([folderRes, notesRes]) => {
      return Promise.all([folderRes.json(), notesRes.json()]);
    })

    .then(([folders, notes]) => {
      console.log("this is api", folders, notes);
      this.setState({
        folders,
        notes
      });
    });
}
  handleDeleteNote = noteId => {
    fetch(`https://kraig-noteful-api.herokuapp.com/api/notes/${noteId}`,{
    
      method: "DELETE"
    }).then(response => {
      //this.componentDidMount()
     // console.log("this",this,"this")
      this.props.history.push("/")
      this.componentDidMount();
      
      //this.props.history.goBack()
    });
  };

  handleAddFolder = event => {
    event.preventDefault();
    const newFolder = this.addFolder.current.value;
    console.log(newFolder, "new folder name")
    //const name =JSON.stringify(newFolder)
    fetch('https://kraig-noteful-api.herokuapp.com/api/folders',{
    
      method: 'POST',
       headers: {'Content-Type':'application/json'},
      body:JSON.stringify({name:newFolder})
    })
    .then(()=>{
this.componentDidMount();
      
      this.props.history.push('/')
      
      
    })
  };

  handleNoteSubmit= event=>{
event.preventDefault();
//const date= new Date()
console.log('folder for note',event.currentTarget.folderId.value)
let folderForNote= this.state.folders.find(folder=>{
  return folder.name===event.currentTarget.folderId.value
});
fetch('https://kraig-noteful-api.herokuapp.com/api/notes',{

  method:'POST',
  headers:{'Content-Type':'application/json'},
body:JSON.stringify({
  name:event.currentTarget.title.value,
  folder_id:folderForNote.id,
  content:event.currentTarget.content.value,
  //modified:date
})
})
.then(()=>{
  this.componentDidMount()
  this.props.history.push("/")
  
})



  }
  

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote
    };

    return (
      <NotefulContext.Provider value={contextValue}>
        <Errors>
        <div className="App">
          <Header />

          <aside className="side">
            <Switch>
              <Route
                exact
                path="/folder/:folderId"
                component={SidebarContext}
              ></Route>

              <Route
                path="/note/:id"
                render={({ match, history }) => {
                  return (
                    <SidebarFolder
                      match={match}
                      history={history}
                      folders={this.state.folders}
                      notes={this.state.notes}
                    />
                  );
                }}
              ></Route>

              <Route exact path="/" component={SidebarContext}></Route>
            </Switch>
          </aside>

          <main>
            <Switch>
              <Route
                path="/note/:id"
                render={({ match, history }) => {
                  return (
                    <NotePage
                      match={match}
                      history={history}
                      folders={this.state.folders}
                      notes={this.state.notes}
                    />
                  );
                }}
              ></Route>

              <Route
                path="/folder/:folderId"
                render={({ match }) => {
                  return (
                    <ul className="note-list">
                      <FolderPage
                        match={match}
                        folders={this.state.folders}
                        notes={this.state.notes}
                      />
                    </ul>
                  );
                }}
              ></Route>

              <Route exact path="/" component={MainContext}></Route>

              <Route
                path="/add-folder"
                render={({ history }) => {
                  return (
                    <AddFolder
                      addFolder={this.addFolder}
                      history={history}
                      handleAddFolder={this.handleAddFolder}
                    />
                  );
                }}
              />


              <Route
              path="/add-note"
              render={({history})=>{
              return <AddNote handleNoteSubmit={this.handleNoteSubmit} folders={this.state.folders} history={history} addNote={this.addNote}/>
              }}
              
              />
            </Switch>
          </main>

        </div>
        </Errors>
      </NotefulContext.Provider>
    );
  }
}

export default withRouter(AppContext);
