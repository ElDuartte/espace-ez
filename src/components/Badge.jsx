import React from "react";

import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar.jsx";

class Badge extends React.Component {
	render() {
		return (
			<div className="Badge">
				<div className="Badge_header">
					<img src={confLogo} alt="Logo de la conferencia" />
				</div>

				<div className="Badge_section-name">
					<Gravatar
						className="Badge_avatar"
						email={this.props.email}
						alt="Avatar"
					/>
					<h1>
						{this.props.firstName} <br /> {this.props.lastName}
					</h1>
				</div>

				<div className="Badge_section-info">
					<h3>{this.props.jobTitle}</h3>
					<div>@{this.props.twitter}</div>
				</div>

				<div className="Badge_footer"> #platziconf </div>
			</div>
		);
	}
}

export default Badge;
