import React, {Component} from 'react';



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
<p>{currentFolder.name}</p>
</div>


        )
    }
}

export default SidebarFolder;