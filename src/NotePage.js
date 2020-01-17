import React,{Component} from 'react';
import NoteList from './NoteList';



class NotePage extends Component{
render(){
    
    const each  = this.props.notes.find(item =>
         item.id === this.props.match.params.id
        )
// const currentFolder= this.props.folders.find(folder=>
//    each.folderId === folder.id )const currentFolder= this.props.folders.find(folder=>
//    each.folderId === folder.id )

return(
    <>
{/* <FolderList 
id={currentFolder.id}
name={currentFolder.name} 
/> */}
    <div >
{/* <h3 className="note-list-item">{each.name}</h3> */}
<NoteList id={each.id} name={each.name} modified={each.modified} />

<p>{each.content}  <button>Delete</button>

</p>  

        </div>

</>


)




}


}



export default NotePage