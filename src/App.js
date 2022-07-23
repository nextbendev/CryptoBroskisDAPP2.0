import logo from './logo.png';
import React, {Component} from "react";
import Navbar from './components/Navbar';

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
        account:'0x00'
      }

  }
    render() {
        return (
          <div>
            <Navbar account={this.state.account}/>
            <div className='text-center'>
              <h1></h1>
            </div>
          </div>
        )
    }
}



export default App;