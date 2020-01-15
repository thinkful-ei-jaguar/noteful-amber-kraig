import React,{Component} from 'react';

class FilteredFolders extends Component{

render(){

    this.props.notes.filter(note=>{
       this.props.match.params.folderId===this.props.notes.folderId 
    })
return(
         





)





}







}


export default FilteredFolders