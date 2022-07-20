import { useEffect, useState } from 'react';
import {constants} from '../constant/constants'

export const checkInPlaylist = (video, playlist) => {
	return playlist.find((item) => item.id === video.id);
};

export const getCustomViewCount = (viewCount) => {
	if (viewCount < 999) return viewCount;
	if (viewCount > 1000 && viewCount < 999000)
		return (viewCount / 1000).toFixed(1).replace(".0", "") + "K";
	if (viewCount > 1000000 && viewCount < 999000000)
		return (viewCount / 1000000).toFixed(1).replace(".0", "") + "M";
	if (viewCount > 1000000000 && viewCount < 999000000000)
		return (viewCount / 1000000000).toFixed(1).replace(".0", "") + "B";
};

export const getSearchedVideos = (videos, userInput) => {
	const re = new RegExp(`${userInput}`, "i");

	return [...videos].filter((video) => re.test(video.title));
};

export const sortByDate = (videosList, operation) => {
	const videos = [...videosList];
	const { NEWEST, OLDEST } = constants;
	if (operation === NEWEST)
		return videos.sort((a, b) => new Date(b.uploaded) - new Date(a.uploaded));
	else if (operation === OLDEST)
		return videos.sort((a, b) => new Date(a.uploaded) - new Date(b.uploaded));
	else return videos;
};


export const useDebounce = (searchVal, delay) => {
	const [debouncedSearchVal, setDebouncedSearchVal] = useState(searchVal);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearchVal(searchVal);
		}, delay);

		return () => {
			// return runs whenever dependencies change
			// if a user enter another letter before the delay
			// then then timer will be cleared , debouncedSearch value will not change
			clearTimeout(handler);
		};
	}, [searchVal, delay]);

	return debouncedSearchVal;
};

