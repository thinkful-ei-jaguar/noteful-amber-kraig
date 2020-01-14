import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import NoteList from './NoteList';

class Main extends Component{

render(){

return(
    <ul className="note-list">

    {this.props.notes.map(note=>{
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


export default Main