import {DEFAULT_SERVER} from "../constants/servers";

const formatUrl = (url, size, query) => `${ url }?format=png&size=${ size }${ query }`;

export const avatarURL = ({
	type, text, size, user = {}, avatar, avatarETag
}) => {

	const uriSize = size === 100 ? size : 50;

	const { id, token } = user;
	let query = '';
	if (id && token) {
		query += `&rc_token=${ token }&rc_uid=${ id }`;
	}
	if (avatarETag) {
		query += `&etag=${ avatarETag }`;
	}

	if (avatar) {
		if (avatar.startsWith('http')) {
			return avatar;
		}

		return formatUrl(`${ DEFAULT_SERVER }${ avatar }`, uriSize, query);
	}

	let room;
	if (type === 'u') {
		room = `avatar/${text}`;
	} else if (type === 'c') {
		room = `club/${text}`;
	} else if (type === 'p') {
		room = `player/${text}`;
	}
	return formatUrl(`${ DEFAULT_SERVER }/${ room }`, uriSize, query);
};
