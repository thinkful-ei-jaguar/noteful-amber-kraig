import React, {Component} from 'react';
//import {NavLink} from 'react-router-dom';
import FolderList from './FolderList';
import AddFolder from './AddFolder';
class Sidebar extends Component{

render(){

return(
<ul className="folder-list">
    {this.props.folders.map( folder=>{
   return <FolderList name={folder.name}
                      key={folder.id}
                      id={folder.id}
                      match={this.props.match}
                      
   
               />
 })}
 
<AddFolder/>

    </ul>





    
)




}




}


export default Sidebar