import React,{Component} from 'react';


class NoteList extends Component{

render(){

return(
<li><h4>{this.props.name} </h4> 
<p>{this.props.content}</p>


</li>

    





)




}









}

export default NoteList;