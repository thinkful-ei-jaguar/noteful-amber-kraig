import React, { Component } from "react";
import Mybutton from "./TestButton";

class App extends Component {

  state={
      count:0
  }

increment=()=>{
this.setState({
    count: this.state.count + 1
})
}

render(){
return(
    <div>
    <p>{this.state.count}</p>
<Mybutton increment={this.increment}/>
</div>
)


}


}

export default App;
