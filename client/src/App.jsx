import { useState } from 'react'
import './App.css'
import abi from './contractJson/coffee.json'
import {ethers} from 'ethers'
import Buy from './components/Buy'
import Memos from './components/Memos'
import { useEffect } from 'react'

function App() {
  const[state, setState] = useState({
    provider:null,
    signer:null,
    contract:null,
  })
  const [account, setAccount]= useState("Not connected")
  useEffect(()=>{
    const template=async()=>{
      // here the contract address will go 
      const contractAddress="";
      const contractABI="";
      try{
        const {ethereum}=window;
        const account = await ethereum.request({
          method:"eth_requestsaccounts"
        })
       setAccount(account); 
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
  
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        )
        setState({provider, signer, contract});
      }catch(error){
        alert(error);
      }
    }
    template();
  }
  )
  return (
    <div>
      <Buy state={state}></Buy>
      Connected Account : {account} 
     {/* <Memos state={state}></Memos> */}
    </div>
  )
}

export default App
