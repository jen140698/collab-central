import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Header from "./component/Header"
import Footer from "./component/Footer"
import Home from "./container/Home"

function App() {
	return (
		<>
			<BrowserRouter>
			<Header />
				<Switch>
					<Route exact path='/' component={Home}></Route>
				</Switch>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
