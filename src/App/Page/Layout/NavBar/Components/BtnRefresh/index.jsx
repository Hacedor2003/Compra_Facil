import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchProfile } from '../../../../../../Data/Store/Features/Profile/ProfileSlice';

export const BtnRefresh = () => {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(fetchProfile());
	};
	return (
		<Button
			variant='light'
			onClick={() => handleClick()}>
			Refresh
		</Button>
	);
};
