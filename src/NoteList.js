import React,{Component} from 'react';
import {Link } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import PropTypes from 'prop-types';

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

NoteList.propTypes = {
id:PropTypes.string,
name:PropTypes.string
}



export default NoteList;