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

class AppContext extends Component {
  constructor() {
    super();

    this.state = {
      folders: [],
      notes: []
    };
    this.addFolder = React.createRef();
  }

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:9090/folders"),
      fetch("http://localhost:9090/notes")
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
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: "DELETE"
    }).then(response => {
      this.componentDidMount();
    });
  };

  handleAddFolder = event => {
    event.preventDefault();
    const newFolder = this.addFolder.current.value;
    
    //const name =JSON.stringify(newFolder)
    
     fetch('http://localhost:9090/folders', {
      method: 'POST',
       headers: {'Content-Type':'application/json'},
      body:JSON.stringify({"name":newFolder})
    })
    .then(response=>{
      this.componentDidMount();
      console.log("this",this.props.history.push('/'))
      this.props.history.push('/')
      
      
    })
  };

  // handleDeleteNote = noteId=>{
  //     this.setState({
  //         notes:this.state.notes.filter(note=>{
  //           return  note.id!== noteId
  //         })
  //     })

  // }

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
                      />{" "}
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
            </Switch>
          </main>

          {/* <Switch>
                  <Route
                    path="/"
                    render={() => {
                      return (
                        <main>
                          <SideBar
                            folders={this.state.folders}
                            notes={this.state.notes}
                          />

                          <Main folders={this.state.folders} notes={this.state.notes} />
                        </main>
                      );
                    }}
                  ></Route>
                  <Route
                    path="/folder/:folderId"
                    render={({ match }) => {
                      return (
                        <main>
                          <SideBar
                            folders={this.state.folders}
                            notes={this.state.notes}
                          />
                          <Main folders={this.state.folders} notes={this.state.notes} />
                        </main>
                      );
                    }}
                  ></Route>
                </Switch> */}
        </div>
      </NotefulContext.Provider>
    );
  }
}

export default withRouter(AppContext);
