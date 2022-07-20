import axios from "axios";

const addToWatchLaterAPI = async (video, token) => {
	return await axios.post(
		"/api/user/watchLater/",
		{ video },
		{ headers: { authorization: token } }
	);
};

const getWatchLaterAPI = async (token) => {
	return await axios.get("/api/user/watchLater", {
		headers: { authorization: token },
	});
};

const removeWatchLaterAPI = async (video, token) => {
	return await axios.delete(`/api/user/watchLater/${video._id}`, {
		headers: { authorization: token },
	});
};

export {addToWatchLaterAPI, getWatchLaterAPI, removeWatchLaterAPI}
