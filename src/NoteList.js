import React,{Component} from 'react';


class NoteList extends Component{

render(){

return(
<li><h4>{this.props.name} </h4> 
<p> Modified: {this.props.modified}</p>


</li>

    





)




}









}

export default NoteList;