import axios from "axios";

const getCategoriesAPI = async () => {
	return await axios.get("/api/categories");
};

const getVideoListingAPI = async () => {
	return await axios.get("/api/videos");
};

const updateVideoCountAPI = async (video) => {
	return await axios.post(`/api/video/${video._id}`);
};

export {getCategoriesAPI, getVideoListingAPI, updateVideoCountAPI}
