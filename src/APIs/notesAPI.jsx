import axios from "axios";

const addToNotesAPI = async (video, note, token) => {
	return await axios.post(
		`/api/user/notes/${video._id}`,
		{ note },
		{
			headers: { authorization: token },
		}
	);
};

const removeFromNotesAPI = async (video, note, token) => {
	return await axios.post(
		`/api/user/notes/delete/${video._id}`,
		{ note },
		{
			headers: { authorization: token },
		}
	);
};

const updateNoteAPI = async (video, note, token) => {
	return await axios.post(
		`/api/user/notes/update/${video._id}`,
		{ note },
		{
			headers: { authorization: token },
		}
	);
};

export {addToNotesAPI, updateNoteAPI, removeFromNotesAPI}