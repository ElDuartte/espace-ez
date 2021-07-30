import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout.js";
import Home from "../pages/Home.js";
import Badges from "../pages/Badges.js";
import BadgeNew from "../pages/BadgeNew.js";
import BadgeDetails from "../pages/BadgeDetailsContainer.js";
import BadgeEdit from "../pages/BadgeEdit.js";
import NotFound from "../pages/NotFound.js";

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
