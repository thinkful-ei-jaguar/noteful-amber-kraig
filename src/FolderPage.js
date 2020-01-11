import React, {Component} from 'react';


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
     return   <li key={each.id}><h2>yes {each.name} </h2>
<p>no  {each.content}</p>    </li>
    })
 }


    </ul>
    
)





}


}



export default FolderPage;