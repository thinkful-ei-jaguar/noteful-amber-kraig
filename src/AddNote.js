import React,{Component} from 'react';


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
        return <option>{folder.name}</option>
    })
return(

<form>
<input type="text" placeholder="Enter note title"></input><br/><br/>
<textarea placeholder="Enter note content"></textarea><br/><br/>
<select>
    {folderOptions}
</select><br/><br/>
<input type="submit"></input>

    </form>


)




}



}


export default AddNote