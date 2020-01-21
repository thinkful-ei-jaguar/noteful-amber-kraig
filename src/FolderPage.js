import React, {
    Component
} from 'react';
import NoteList from './NoteList';
import {Link } from 'react-router-dom';

class FolderPage extends Component {


    render() {
        console.log("this is match", this.props.match)
        let finalFolders = this.props.notes.filter(note => {
            return note.folderId === this.props.match.params.folderId
        })
        console.log(finalFolders)


        return (
            //     <ul>
            //     {finalFolders.map(each=>{
            //      return   <li class="filtered-folders" key={each.id}><h2> {each.name} </h2>
            // <p>{each.modified}</p>    </li>
            //     })
            //  }


            //     </ul>
<>{
            finalFolders.map(note => {
                    console.log(note)
                    return <NoteList id = {
                        note.id
                    }
                    key = {
                        note.id
                    }
                    name = {
                        note.name
                    }
                    modified = {
                        note.modified
                    }

                    />}



                )
    }
<Link to="/add-note">Add New Note</Link>
     </>
            )



        }


    }



    export default FolderPage;