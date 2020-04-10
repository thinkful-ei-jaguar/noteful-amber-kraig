import React from 'react';
//import { render } from '@testing-library/react';
import App from './AppContext';
import ReactDOM from  'react-dom';
import renderer from 'react-test-renderer';

describe('<App/>',()=>{
  it ('is able to render',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  
  


})

