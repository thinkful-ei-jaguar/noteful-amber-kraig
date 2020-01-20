import React, {Component } from 'react';

import NoteList from './NoteList';
import NotefulContext from './NotefulContext';
import {Link} from 'react-router-dom';


class MainContext extends Component{
static contextType = NotefulContext


render(){

return(
    <ul className="note-list">

    {this.context.notes.map(note=>{
    return <NoteList
        key={note.id} 
        id={note.id}
        name={note.name}  
        content={note.content}  
        modified={note.modified}
    folderId={note.folderId} />}) }

                            
       
       <Link to="/add-note">Add New Note</Link>
     
       

</ul>

)





}










}


export default MainContext