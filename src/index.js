import React from 'react';
import ReactDOM from 'react-dom';
import LocaleProvider from "./context/LocaleContext"
import { BrowserRouter, Route } from "react-router-dom"
import './index.css';
import Landing from './Landing';
import { AboutMe } from './AboutMe';
import { Projects } from './Projects';
import { Header } from "./components/Header"
import { GlobalStyle } from "./theme/GlobalStyle"

ReactDOM.render(
  <React.StrictMode>
  	<GlobalStyle />
  	<BrowserRouter>
  	<LocaleProvider>
    <Header />
		<Route exact path="/" component={Landing}></Route>
		<Route exact path="/projects" component={Projects}></Route>
		<Route exact path="/about" component={AboutMe}></Route>	
	</LocaleProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

