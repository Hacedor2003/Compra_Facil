import { useEffect, useState } from 'react';
import { Anchor, AnchorLink } from './Style';
import { useSelector } from 'react-redux';
import { selectAllprofile } from '../../../../../../Data/Store/Features/Profile/ProfileSlice';

export const ProfilePhoto = () => {
	const [imageSrc, setImageSrc] = useState(null);
	useEffect(() => {
		const storedImage = localStorage.getItem('photo');
		if (storedImage) {
			setImageSrc(storedImage);
		}
	}, []);
	const profile = useSelector(selectAllprofile);

	return (
		<>
			{profile.isLocal ? (
				<Anchor>
					<img src={imageSrc ? imageSrc : 'https://th.bing.com/th/id/OIP.z2EVNghKpSs2wUWRoIUOXAAAAA?rs=1&pid=ImgDetMain'} />
				</Anchor>
			) : (
				<AnchorLink href='/login'>Login</AnchorLink>
			)}
		</>
	);
};
