import axios from "axios";
import { GET_ERRORS, GET_GIPHIES, SEARCH_GIPHY } from "./types";

// GET GIPHIES
export const getGiphies = () => async dispatch => {
	try {
		const res = await axios.get("/api/giphy");
		dispatch({
			type: GET_GIPHIES,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: GET_ERRORS,
			payload: err.response.data
		});
	}
};

// Search Giphy
export const searchGiphy = searchData => dispatch => {
	axios
		.post("/api/giphy/search", searchData)
		.then(res =>
			dispatch({
				type: SEARCH_GIPHY,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};
