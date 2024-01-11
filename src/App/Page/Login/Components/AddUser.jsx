import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { profileAdded } from '../../../../Data/Store/Features/Profile/ProfileSlice';

function AddUser() {
	const dispatch = useDispatch();

	useEffect(() => {
		const addUser = async () => {
			try {
				const response = await fetch('https://fakestoreapi.com/users', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: 'John@gmail.com',
						username: 'johnd',
						password: 'm38rmF$',
						name: {
							firstname: 'John',
							lastname: 'Doe',
						},
						address: {
							city: 'kilcoole',
							street: '7835 new road',
							number: 3,
							zipcode: '12926-3874',
							geolocation: {
								lat: '-37.3159',
								long: '81.1496',
							},
						},
						phone: '1-570-236-7033',
					}),
				});

				if (!response.ok) {
					throw new Error('Failed to add user');
				}

				const data = await response.json();
				dispatch(profileAdded(data));
			} catch (error) {
				console.error('Error al agregar perfil:', error);
			}
		};

		addUser();
	}, [dispatch]);

	return null;
}

export default AddUser;
