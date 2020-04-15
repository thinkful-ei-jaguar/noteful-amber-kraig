import React, {
    Component
} from 'react';
import NoteList from './NoteList';
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';
class FolderPage extends Component {


    render() {
        console.log("this is match", this.props.match)
        let finalFolders = this.props.notes.filter(note => {
            return note.folder_id === this.props.match.params.folderId
        })
        console.log(finalFolders)


        return (

<>
{
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

    FolderPage.propTypes = {
        notes:PropTypes.array
        }
        


    export default FolderPage;