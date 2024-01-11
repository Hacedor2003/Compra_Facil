import { useEffect, useState } from 'react';
import { Anchor, AnchorLink } from './Style';
import { GetDataLogin } from '../../../../Components/getDataLogin';

export const ProfilePhoto = () => {
	const [imageSrc, setImageSrc] = useState(null);
	const { lenght } = GetDataLogin();
	useEffect(() => {
		const storedImage = localStorage.getItem('photo');
		if (storedImage) {
			setImageSrc(storedImage);
		}
	}, []);

	return (
		<>
			{lenght > 0 ? (
				<Anchor>
					<img src={imageSrc ? imageSrc : 'https://th.bing.com/th/id/OIP.z2EVNghKpSs2wUWRoIUOXAAAAA?rs=1&pid=ImgDetMain'} />
				</Anchor>
			) : (
				<AnchorLink href='/login'>Login</AnchorLink>
			)}
		</>
	);
};
