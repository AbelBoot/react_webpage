import React from 'react';
import ReactDOM from 'react-dom';
import LocaleProvider from "./components/LocaleContext"
import { BrowserRouter, Route } from "react-router-dom"
import './index.css';
import Landing from './Landing';
import AboutMe from './AboutMe';
import Projects from './Projects';
import { GlobalStyle } from "./components/GlobalStyle"

ReactDOM.render(
  <React.StrictMode>
  	<GlobalStyle />
  	<BrowserRouter>
  	<LocaleProvider>
		<Route exact path="/" component={Landing}></Route>
		<Route exact path="/projects" component={Projects}></Route>
		<Route exact path="/about" component={AboutMe}></Route>	
	</LocaleProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

