import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getAllUsers } from "../../actions/auth";

class AllUsers extends React.Component {
	componentDidMount() {
		this.props.getAllUsers();
	}

	render() {
		const { users } = this.props;
		const userVar = users.map(function(user, i) {
			return (
				<div key={i}>
					<h2>{user.name}</h2>
					<h5>{user.email}</h5>
					<h5>{user.date}</h5>
				</div>
			);
		});
		return <Container>{userVar}</Container>;
	}
}

AllUsers.propTypes = {
	users: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	company: state.company,
	errors: state.errors,
	users: state.auth.users
});

export default connect(
	mapStateToProps,
	{ getAllUsers }
)(withRouter(AllUsers));
