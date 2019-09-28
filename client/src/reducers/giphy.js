import { GET_GIPHIES, SEARCH_GIPHY } from "../actions/types";

const initialState = {
	loading: true,
	giphys: { data: [] }
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_GIPHIES:
			return {
				...state,
				loading: false,
				giphys: payload
			};
		case SEARCH_GIPHY:
			return {
				...state,
				loading: false,
				giphys: payload
			};
		default:
			return state;
	}
}
