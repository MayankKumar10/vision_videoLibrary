import React from 'react'
import { addToPlaylistAPI, removeFromPlaylistAPI } from '../../APIs';
import { actionTypes } from '../../constant';
import { CustomPlaylist } from '../../hooks';
import '../../styles/root.css'

export const CheckBox = ({exists, playlist, video}) => {
  const { SET_PLAYLIST } = actionTypes;
	const [addToPlaylistCall] = CustomPlaylist(
		addToPlaylistAPI,
		playlist,
		SET_PLAYLIST,
		`Added to ${playlist.title}`,
		video
	);
	const [removeFromPlaylist] = CustomPlaylist(
		removeFromPlaylistAPI,
		playlist,
		SET_PLAYLIST,
		`Removed from ${playlist.title}`,
		video
	);
	const checkBoxHandler = () => {
		exists ? removeFromPlaylist() : addToPlaylistCall();
	};
	return (
		<input
			type="checkbox"
			className="input-checkbox"
			checked={exists?.id === video.id}
			onChange={() => checkBoxHandler(exists, playlist)}
		/>
	);
}
