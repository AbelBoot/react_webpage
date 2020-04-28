import React from 'react'
import "./Landing.css"
import { Button } from "./theme/SmallComp"
import { violet } from "./theme/variables"
import Header from "./components/Header"
import Tabs from "./components/Tabs"
import { Icon } from "./components/Icons"

function Landing() {
  return (
    <>
    <Header />
    <h3>This is the portfolio..</h3>
    <Icon name="backward2" width="25px" color={violet}/>
    <Icon name="facebook2" color={"yellow"}/>
    <Icon name="forward3" />
    <Icon name="linkedin" />
    <Icon name="mail" />
    <Icon name="minus" />
    <Icon name="pause2" />
    <Icon name="play3" />
    <Icon name="plus" />
    <Icon name="stop2" />
    <Icon name="youtube" />
    <Icon name="react" />
    <Icon name="volumehigh" color="blue"/>
    <Icon name="volumemute2" color="blue"/>
    <Icon name="linkedin2" color="blue"/>
    <Icon name="youtube2" color="blue"/>
    <Icon name="nodejs" color="blue"/>
    <Icon name="javascript" color="blue"/>
    <Icon name="html" color="blue"/>
    <Icon name="css" color="blue"/>
    <Icon name="github" color="blue"/>
    <Icon name="rails" color="blue"/>
    <Button>Button</Button>
    </>
  );
}

export default Landing;
