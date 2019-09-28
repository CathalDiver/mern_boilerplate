const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const axios = require("axios");

// @route    GET api/giphy
// @desc     get random giphys
// @access   Public
router.get("/", auth, async (req, res) => {
	try {
		axios
			.get(
				"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=[API_KEY_HERE]&limit=9"
			)
			.then(response => {
				res.send(response.data);
			});
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

// @route    POST api/giphys/search
// @desc     Register user
// @access   Public
router.post("/search", async (req, res) => {
	let str1 = "http://api.giphy.com/v1/gifs/search?q=";
	const str2 = "&api_key=LEls10pQ1lqL1lxLehiPoD0P61SpGcQK&limit=9";
	str1 = str1.concat(req.body.searchTerm);
	const url = str1.concat(str2).toString();

	try {
		axios.get(url).then(response => {
			res.send(response.data);
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;
