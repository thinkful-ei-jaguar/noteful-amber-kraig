import React, {Component} from 'react';


class Errors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    render() {
        if (this.state.hasError) {      
            return (
              <h2>Sorry Unexpected Error</h2>
            );
          }
          return this.props.children;
        } 
    //     return (

    //     )
    // }
}

export default Errors