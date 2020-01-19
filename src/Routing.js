import React from 'react';
import {Route} from 'react-router-dom'




function Home(){

return<h1>Home</h1>

}

function About(){
    return <h1>About</h1>
}

function Contact(){
    return <h1>Contact</h1>
}

function Order(){
    return <h1>Order</h1>
}

function App(){

    return (
        <div>


<Route 
path='/about'
component={About}
/>

<Route 
path="/about-us/contact/"
component={Contact}
/>
<Route 
path='/'
component={Home}
/>

<Route 
path="/order/order-page"
component={Order}

/>
</div>
    )

    
}

export default App