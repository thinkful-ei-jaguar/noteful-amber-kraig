import React,{Component} from 'react';
import propTypes from 'prop-types';

class AddNote extends Component{
// state={
//     options:[]
// }

//  componentDidMount(){
     
//      fetch('http://localhost:9090/folders')
//      .then(response=>response.json())
//      .then(data=>{
     
//       let folderOptions= data.map(each=>{
//         return <option>{each.name}</option> 
//      })
//      this.setState({options:folderOptions})
     
//      })
//  }   


render(){
    let folderOptions= this.props.folders.map(folder=>{
        return <option name="selected" key={folder.id} id={folder.id}> {folder.name}</option>
    })
return(

<form name="submit-note" onSubmit={event=>this.props.handleNoteSubmit(event)}>
<input name="title" type="text" placeholder="Enter note title"></input><br/><br/>
<textarea name="content" placeholder="Enter note content"></textarea><br/><br/>
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