import axios from "axios";

const addToLikesAPI = async (video, token) => {
	return await axios.post(
		"/api/user/likes",
		{ video },
		{ headers: { authorization: token } }
	);
};

const removeLikesAPI = async (video, token) => {
	return await axios.delete(`/api/user/likes/${video._id}`, {
		headers: { authorization: token },
	});
};

const getLikesAPI = async (token) => {
	return await axios.get("/api/user/likes", {
		headers: { authorization: token },
	});
};

export {addToLikesAPI, removeLikesAPI, getLikesAPI}