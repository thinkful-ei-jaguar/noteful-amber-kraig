import React, {Component} from 'react';
import PropTypes from 'prop-types';



class SidebarFolder extends Component{
    
    componentDidMount(){

    }
    render(){
        // let {notes}= this.props
        // let found;
        // console.log('sidebar notes',this.props.notes,this.props.match.params.id)
        // for(let i=0;i<this.props.notes.length;i++){
        //     if(notes[i].id=== this.props.match.params.id){
        //     let found = notes[i]
        //     console.log("found",found)
        //     return found
        //     }
            
        // }
         const each  = this.props.notes.find(item =>{
            return item.id === this.props.match.params.id
         })
          console.log(each,"**********each************")
   const currentFolder= this.props.folders.find(folder=>
      each.folder_id === folder.id )
console.log(currentFolder,"current folder")

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