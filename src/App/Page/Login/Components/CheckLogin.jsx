import { useSelector } from 'react-redux';
import { selectProfileByPassWord, selectProfileByUserName } from '../../../../Data/Store/Features/Profile/ProfileSlice';

export const CheckLogin = (username, password) => {
	const userProfile = useSelector((state) => ({
		userName: selectProfileByUserName(state, username),
		passWord: selectProfileByPassWord(state, password),
	}));

	const { userName, passWord } = userProfile;

	if (userName && passWord) {
		return { userName, passWord };
	}
};
