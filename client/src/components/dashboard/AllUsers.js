import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { getGiphies, searchGiphy } from "../../actions/giphy";
import { Grid, Input, Image, Divider } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class AllUsers extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ""
		};

		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		this.props.getGiphies();
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value }, () => {
			this.handleChange();
		});
	}

	handleChange(e) {
		const searchDetails = {
			searchTerm: this.state.searchTerm
		};

		this.props.searchGiphy(searchDetails);
	}

	render() {
		const { data } = this.props.giphy.giphys;
		const gifVar = data.map(function(giphy, i) {
			return (
				<Grid.Column key={i}>
					<Image
						src={giphy.images.fixed_height_still.url}
						bordered={true}
					/>
				</Grid.Column>
			);
		});
		return (
			<Container>
				<Input
					type="text"
					placeholder="Search for...."
					name="searchTerm"
					value={this.state.searchTerm}
					onChange={this.onChange}
					size="massive"
					fluid={true}
				/>
				<Divider />
				<Grid columns={3} divided verticalAlign={"middle"}>
					<Grid.Row>{gifVar}</Grid.Row>
				</Grid>
			</Container>
		);
	}
}

AllUsers.propTypes = {
	giphy: PropTypes.object.isRequired,
	searchGiphy: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	errors: state.errors,
	giphy: state.giphy
});

export default connect(
	mapStateToProps,
	{ getGiphies, searchGiphy }
)(withRouter(AllUsers));
