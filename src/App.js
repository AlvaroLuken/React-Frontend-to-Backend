import React from "react";
import { ethers } from "ethers";
import './App.css';
import styled from "styled-components";
import { Input, Text, Center, Stack } from "@chakra-ui/react"

const InputBox = styled.div`
  margin: 2rem;
  background-color: purple;
  height: 16px;
`


export default function App() {
  const [name, setName] = React.useState();
  React.useEffect(() => {
    // put a function here that you want to run on load!
    displayBackendData()
  }, []);


  const myFunction = () => {
    // 3. this receives the message, store it in a div and do whatever you like!
    const message = document.getElementById("message").value;
    console.log(`4. The message printed in the back-end is: ${message}`)
    console.log('Use is it an ethers.js query!')
  }

  const displayBackendData = () => {
    // 5. To pass data from backend to frontend
    const backendData = "Hello, I am a string fetched from the backend on line 31"
    // use the React useState() hook
    // to set the data
    setName(backendData);

    // then reference it in returned HTML, ie: line 75
  }

  // write more functions here, before the return()

  
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        React App
        </div>

        <div className="sub-header" styles="margin-bottom: 32px;">
        Hello, I am a string on line 40 in App.js!
        </div>
        <div styles="height:32px"></div>
        

        <form onSubmit={null} styles="margin-top: 32px;">
          <Center>
            <Text fontSize="32px" align="center">This is a good way to send messages from front-end to back-end</Text>
          </Center>
          <div styles="height:8px"></div>
          <label>
            1. Type a message to send to the server here...
            <Input id="message" type="text"/>
          </label>
        </form>
        <button className="button" onClick={myFunction}>
          2. Send the message to the back-end through this button's onClick
        </button>
        <Center>
          <Stack>
            <ul>
              <li><Text fontSize="6xl">After clicking, check the browser console to see the delivered message.</Text></li>
              <li><Text fontSize="6xl">Logging of message comes from myFunction in App.js</Text></li>
              <li><Text fontSize="6xl">{name}</Text></li>
            </ul>
          </Stack>
        </Center>
        


       

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
