import { useSelector } from 'react-redux';
import { selectAllprofile } from '../../../../Data/Store/Features/Profile/ProfileSlice';

export const GetDataLogin = () => {
	const data = useSelector(selectAllprofile);
	const usernameLocal = localStorage.getItem('username');
	const passwordLocal = localStorage.getItem('password');
	const dataLocal = data.filter((item) => item.username === usernameLocal && item.password === passwordLocal);
	const local = dataLocal[0];
	const lenght = dataLocal.length;

	return { local, lenght };
};
