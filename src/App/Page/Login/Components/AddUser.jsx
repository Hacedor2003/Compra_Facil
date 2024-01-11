import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../actions/userActions';

const AddUser = () => {
	const dispatch = useDispatch();
	const [userData, setUserData] = useState({
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
	});

	const handleFormSubmit = () => {
		dispatch(createUser(userData));
	};

	return <form onSubmit={handleFormSubmit}>{/* ...inputs and submit button */}</form>;
};

export default AddUser;