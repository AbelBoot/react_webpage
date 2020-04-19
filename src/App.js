import React from 'react';
import "./App.css"
import { Button } from "./components/AboutMe"
import Tabs from "./components/Tabs"
import { GlobalStyle } from "./components/GlobalStyle"

function App() {
  return (
    <>
    <GlobalStyle />
    <h3>This is the portfolio..</h3>
    <Tabs>
      <div label="croco">See you later Alligator</div>
      <div label="allig">After a while crocodile</div>
    </Tabs>
    <Button>Button</Button>
    </>
  );
}

export default App;
