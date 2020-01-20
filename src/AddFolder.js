import React,{Component} from 'react';



class AddFolder extends Component{

render(){
console.warn("add folder component is rendering")
    return(
        <form name="add-folder-form" onSubmit={event=>this.props.handleAddFolder(event)}>
<input type='text' ref={this.props.addFolder} placeholder="Enter New Folder Name"/> <br/><br/><br/>
<button type="submit">Add Folder</button>

            </form>




    )


}





}


export default AddFolder