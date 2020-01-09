import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class FolderList extends Component{

render()
{
return(
<li>
<h4><NavLink to="">{this.props.name}</NavLink></h4>
</li>



)


}


}


export default FolderList;