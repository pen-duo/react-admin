import React, { Component } from 'react';
import {BrowserRouter,Router} from "react-router-dom"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Button type="primary">你好</Button>
      );
  }
}
 
export default Home;