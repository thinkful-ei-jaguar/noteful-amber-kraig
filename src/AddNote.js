import React,{Component} from 'react';
import propTypes from 'prop-types';

class AddNote extends Component{


render(){
    let folderOptions= this.props.folders.map(folder=>{
        return <option name="selected" key={folder.id} id={folder.id}> {folder.name}</option>
    })
return(

<form name="submit-note"onSubmit={event=>this.props.handleNoteSubmit(event)}>
<input required name="title" type="text" placeholder="Enter note title"></input><br/><br/>
<textarea required name="content" placeholder="Enter note content"></textarea><br/><br/>
<select  name="folderId">
    {folderOptions}
</select><br/><br/>
<input type="submit"></input>

    </form>


)




}



}
AddNote.propTypes={
    folder:propTypes.arrayOf(propTypes.object)
}

export default AddNote