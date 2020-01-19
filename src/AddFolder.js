import React,{Component} from 'react';



class AddFolder extends Component{

render(){

    return(
        <form onSubmit={(event)=>this.props.handleAddFolder(event)}>
<input type='text' ref={this.addFolder} placeholder="Enter New Folder Name"/> <br/><br/><br/>
<button type="submit">Add Folder</button>

            </form>




    )


}





}


export default AddFolder