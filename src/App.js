import React from "react";
import { ethers } from "ethers";
import './App.css';
import styled from "styled-components";
import { Text } from "@chakra-ui/react"

const InputBox = styled.div`
  margin: 2rem;
  background-color: purple;
  height: 16px;
`


export default function App() {
  React.useEffect(() => {
    // put a function here that you want to run on load!
  }, []);


  const myFunction = () => {
    // 3. this receives the message, store it in a div and do whatever you like!
    const message = document.getElementById("message").value;
    console.log(`4. The message printed in the back-end is: ${message}`)
    console.log('Use is it an ethers.js query!')
  }

  // write more functions here, before the return()

  
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        React App
        </div>

        <div className="sub-header" styles="margin-bottom: 32px;">
        Hello, I am input located in App.js!
        </div>
        <div styles="height:32px"></div>
        

        <form onSubmit={null} styles="margin-top: 32px;">
          <Text fontSize="6xl">This is a good way to send messages from front-end to back-end</Text>
          <div styles="height:8px"></div>
          <label>
            1. What is your message to send to the server?
            <input id="message" type="text"/>
          </label>
        </form>
        <button className="button" onClick={myFunction}>
          2. Send this message to the back-end through the onClick
        </button>

       

        {/* {someArray.map((element, index) => {
          return (
            <div style={{backgroundColor: "green", marginTop: "16px", padding: "8px"}}>
              <div key={element.index}>Address: {element.address}</div>
              <div key={element.index}>Time: {element.timestamp.toString()}</div>
              <div key={element.index}>Message: {element.message}</div>
              <div key={element.index}>Uri: {element.uri}</div>
              <img src="https://ipfs.io/ipfs/QmdUXVtRxKhdVhjPXCUxZGyXNHn5e2oS6pt8enPXo7X4Hk"/>
            </div>
          )
        })} */}
      </div>
    </div>
  );
}
