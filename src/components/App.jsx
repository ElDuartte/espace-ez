import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "../pages/Home.jsx";
import Badges from "../pages/Badges.jsx";
import BadgeNew from "../pages/BadgeNew.jsx";
import BadgeDetails from "../pages/BadgeDetailsContainer.jsx";
import BadgeEdit from "../pages/BadgeEdit.jsx";
import NotFound from "../pages/NotFound.jsx";

import "../index.scss";

function App() {
	return (
		<HashRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/react" component={Home} />
					<Route exact path="/badges" component={Badges} />
					<Route exact path="/badges/new" component={BadgeNew} />
					<Route exact path="/badges/:badgeId" component={BadgeDetails} />
					<Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</HashRouter>
	);
}

export default App;
