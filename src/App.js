import logo from './logo.png';
import React, {Component} from "react";
import Web3 from 'web3';
import Navbar from './components/Navbar';

class App extends Component {

  async UNSAFE_componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      console.log("1")
    } else if(window) {
      window.web3 = new Web3(window.web3.currentProvider)
      console.log("2")
    } else {
      window.alert('check MM. shits fucked')
      console.log("3")
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const account = await web3.eth.getAccounts()
    console.log("3", account)
  }

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