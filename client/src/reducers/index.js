import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import giphy from "./giphy";

export default combineReducers({
	alert,
	auth,
	giphy
});
