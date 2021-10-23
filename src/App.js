import React from "react";
import { ethers } from "ethers";
import './App.css';
import { Input, Text, Center, Stack } from "@chakra-ui/react"

export default function App() {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  React.useEffect(() => {
    // put a function here that you want to run every time the page loads!
    // that is what the useEffect hook is for!
    displayBackendData()
  }, []);


  const myFunction = () => {
    console.log("3. We've got hooks rigged up to our message variable! So the value is accessible pretty much anywhere via the message variable!");
    
    console.log(`4. The message printed in the back-end is: ${message}`)
    console.log('Use is it an ethers.js query!')


    console.log("Fun Fact: Your message is sent to the backend one character at a time because it is hooked up to onChange()");
    console.log("The onClick is mainly useful to trigger more logic, but your message is accessible by the backend 100% of the time!")
  }

  const displayBackendData = () => {
    // 5. To pass data from backend to frontend
    const backendData = "Hello, I am a string fetched from the backend on line 31 (using hooks)"
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
        Hello, I am a string on line 52 in App.js!
        </div>
        <div className="sub-header" styles="margin-bottom: 32px;">
        Make sure you have the Developer Tools 'Console' open when interacting with this page to get the full learning experience!
        </div>
        <div styles="height:16px"></div>
        

        <form onSubmit={null} styles="margin-top: 32px;">
          <Center>
            <Text fontSize="32px" align="center">This is a good way to send messages from front-end to back-end</Text>
          </Center>
          <div styles="height:8px"></div>
          <label>
            1. Type a message to send to the server here...
            <Input id="message" type="text" onChange={e => setMessage(e.target.value)}/>
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
              <li><Text fontSize="6xl">Open your Chrome developer tools for the next steps!</Text></li>
            </ul>
            <Text fontSize="32px" align="center">{name}</Text>
          </Stack>
        </Center>
      </div>
    </div>
  );
}
