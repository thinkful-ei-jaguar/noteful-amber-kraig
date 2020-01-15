import React,{Component} from 'react';
import {Link } from 'react-router-dom';

class NoteList extends Component{

render(){

return(
<li className="note-list-item"> <Link to={`/note/${this.props.id}`}> <h4 > {this.props.name} </h4> </Link>
<p> Modified: {this.props.modified}</p>


</li> 

    





)




}









}

export default NoteList;