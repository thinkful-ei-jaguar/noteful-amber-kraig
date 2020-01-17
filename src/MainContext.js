import React, {Component } from 'react';

import NoteList from './NoteList';
import NotefulContext from './NotefulContext';


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

                            
       
       
     
       

</ul>

)





}










}


export default MainContext