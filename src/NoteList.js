import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class NoteList extends Component{

render(){

return(
<li> <Link to= "/"> <h4> {this.props.name} </h4> </Link>
<p> Modified: {this.props.modified}</p>


</li> 

    





)




}









}

export default NoteList;