import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProfileById, selectProfileStatus } from '../../Data/Store/Features/Profile/ProfileSlice';

export const useProfileData = () => {
	let profileStatus = useSelector(selectProfileStatus);
	const profile = useSelector((state) => selectProfileById(state, 2));
	const dispatch = useDispatch();

	const [localProfileData, setLocalProfileData] = useState(null);

	useEffect(() => {
		const localData = {
			username: localStorage.getItem('username'),
			password: localStorage.getItem('password'),
			email: localStorage.getItem('email'),
			id: localStorage.getItem('id'),
			photo: localStorage.getItem('photo'),
			name: {
				firstname: localStorage.getItem('name'),
				lastname: localStorage.getItem('lastname'),
			},
		};

		if (localData.username) {
			setLocalProfileData(localData);
		}
	}, [profileStatus, dispatch]);

	return {
		status: profileStatus,
		data: localProfileData || profile,
		isLocal: !!localProfileData,
	};
};

