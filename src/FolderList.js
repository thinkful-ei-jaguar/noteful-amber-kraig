import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FolderList extends Component{

render()
{
return(
<li>
<h4><Link to="">{this.props.name}</Link></h4>
</li>



)


}


}


export default FolderList;