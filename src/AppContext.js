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
    Promise.all([
      fetch("https://kraig-bookmarks.herokuapp.com/folders"),
      fetch("https://kraig-bookmarks.herokuapp.com/notes")
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
    fetch(`https://kraig-bookmarks.herokuapp.com/notes/${noteId}`, {
      method: "DELETE"
    }).then(response => {
      this.componentDidMount();
    });
  };

  handleAddFolder = event => {
    event.preventDefault();
    const newFolder = this.addFolder.current.value;
    
    //const name =JSON.stringify(newFolder)
    
     fetch('https://kraig-bookmarks.herokuapp.com/folders', {
      method: 'POST',
       headers: {'Content-Type':'application/json'},
      body:JSON.stringify({name:newFolder})
    })
    .then(response=>{
      this.componentDidMount();
      
      this.props.history.push('/')
      
      
    })
  };

  handleNoteSubmit= event=>{
event.preventDefault();
let folderForNote= this.state.folders.find(folder=>{
  return folder.name===event.currentTarget.folderId.value
});

fetch('https://kraig-bookmarks.herokuapp.com/notes',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
body:JSON.stringify({
  name:event.currentTarget.title.value,
  folderId:folderForNote.id,
  content:event.currentTarget.content.value
})
})
.then(response=>{
  this.componentDidMount()
  this.props.history.push("/")
  
})



  }
  

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote
    };

    return (
      <NotefulContext.Provider value={value}>
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
      </NotefulContext.Provider>
    );
  }
}

export default withRouter(AppContext);
