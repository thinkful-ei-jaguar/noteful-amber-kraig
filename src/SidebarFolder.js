import React, {Component} from 'react';
import PropTypes from 'prop-types';



class SidebarFolder extends Component{
    render(){

        const each  = this.props.notes.find(item =>
            item.id === this.props.match.params.id
           )
   const currentFolder= this.props.folders.find(folder=>
      each.folderId === folder.id )


        return(
<div>
<button onClick={this.props.history.goBack}>Go Back</button>
<p className="note-sidebar">{currentFolder.name}</p>
</div>


        )
    }
}

SidebarFolder.propTypes={
    notes: PropTypes.array,
    folders:PropTypes.array
}


export default SidebarFolder;