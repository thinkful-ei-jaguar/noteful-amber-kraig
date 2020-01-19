import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FolderList from './FolderList';
import NotefulContext from './NotefulContext';
//import AddFolder from './AddFolder';
class SidebarContext extends Component{
    
static contextType= NotefulContext;


render(){
    console.log("this is context",this.context)
    console.log("this is match",this.props.match)
    console.log("this is props", this.props)
return(
    
<ul className="folder-list">
    {this.context.folders.map( folder=>{
   return <FolderList name={folder.name}
                      key={folder.id}
                      id={folder.id}
                      match={this.props.match}
                      
   
               />
 })}
<Link to="/add-folder" >Add New Folder</Link>

    </ul>





    
)




}




}


export default SidebarContext