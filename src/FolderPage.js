import React, {Component} from 'react';
// import NotePage from './NotePage';


class FolderPage extends Component{


render(){
    console.log(this.props.match)
let finalFolders=  this.props.notes.filter(note=>{
return note.folderId === this.props.match.params.folderId})
// finalFolders.join("")
console.log(finalFolders)


return (
    <ul>
    {finalFolders.map(each=>{
     return   <li class="filtered-folders" key={each.id}><h2> {each.name} </h2>
<p>{each.modified}</p>    </li>
    })
 }


    </ul>
    
)





}


}



export default FolderPage;