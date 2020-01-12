import React,{Component} from 'react';



class NotePage extends Component{
render(){
      
    const each  = this.props.notes.find(item =>
         item.id === this.props.match.params.id
        )

    
return(
    <div>
<h3>{each.name}</h3>
<p>{each.content}
{/* <p>{each.name}</p> */}
</p>  

        </div>




)




}


}



export default NotePage