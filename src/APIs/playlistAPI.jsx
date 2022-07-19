import axios from "axios";

const addPlaylistAPI = async (playlist, token) => {
	return await axios.post(
		"/api/user/playlists",
		{ ...playlist },
		{ headers: { authorization: token } }
	);
};

const addToPlaylistAPI = async (playlist, video, token) => {
	return await axios.post(
		`/api/user/playlists/${playlist._id}`,
		{ video },
		{ headers: { authorization: token } }
	);
};

const getAllPlaylistAPI = async (token) => {
	return await axios.get("/api/user/playlists", {
		headers: { authorization: token },
	});
};

const getPlaylistAPI = async (playlistId, token) => {
	return await axios.get(`/api/user/playlists/${playlistId}`, {
		headers: { authorization: token },
	});
};

const removeFromPlaylistAPI = async (playlist, video, token) => {
	return await axios.delete(
		`/api/user/playlists/${playlist._id}/${video._id}`,
		{
			headers: { authorization: token },
		}
	);
};

const removePlaylistAPI = async (
  playlist,
  token
) => {
  return await axios.delete(
    `/api/user/playlists/${playlist._id}`,
    {
      headers: {authorization: token},
    }
  );
};

export {addPlaylistAPI, addToPlaylistAPI, getAllPlaylistAPI, getPlaylistAPI, removeFromPlaylistAPI, removePlaylistAPI}
