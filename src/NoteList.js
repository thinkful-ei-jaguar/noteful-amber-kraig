import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import propTypes from 'prop-types';

class NoteList extends Component{
static contextType= NotefulContext;
render(){

return(
<li className="note-list-item"> <Link to={`/note/${this.props.id}`}> <h4 > {this.props.name} </h4> </Link>
<p> Modified: {this.props.modified} <button onClick={()=>this.context.deleteNote(this.props.id)}>Delete</button></p>


</li> 

    





)




}









}
NoteList.propTypes={
id:propTypes.string,
name:propTypes.string,
}



export default NoteList;