import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class FolderList extends Component{

render()
{
return(
<NavLink activeClassName="selected"
 to={`/folder/${this.props.id}`}><li>
<h4>{this.props.name}</h4> 
</li>
</NavLink>


)


}


}


export default FolderList;