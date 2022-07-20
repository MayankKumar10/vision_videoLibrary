import axios from "axios";

const addToHistoryAPI = async (video, token) => {
	return await axios.post(
		"/api/user/history",
		{ video },
		{ headers: { authorization: token } }
	);
};

const getHistoryAPI = async (token) => {
	return await axios.get("/api/user/history", {
		headers: { authorization: token },
	});
};

const removeFromHistoryAPI = async (video, token) => {
	return await axios.delete(`/api/user/history/${video._id}`, {
		headers: { authorization: token },
	});
};

const removeAllHistoryAPI = async (_, token) => {
	return await axios.delete("/api/user/history/all", {
		headers: { authorization: token },
	});
};

export{addToHistoryAPI,getHistoryAPI,removeFromHistoryAPI,removeAllHistoryAPI}