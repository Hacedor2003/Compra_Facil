import { useState } from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Storage = ({ product, selected , listaStorage }) => {
	const [storageSelected, setStorageSelected] = useState({});

	const handleCheckBoxChange = (e) => {
		const Storage = e.target.id;
		const updatedSelection = {
			...storageSelected,
			[Storage]: e.target.checked,
		};
		setStorageSelected(updatedSelection);
		if (e.target.checked) {
			alert(`¡El Storage ${Storage} ha sido seleccionado! 🎉`);
		}
	};

	let content = <p>Storages</p>;

	content = listaStorage.map((Storage, index) => (
		<Col key={index}>
			<input
				type='checkbox'
				id={index}
				checked={storageSelected[index] || false}
				onChange={handleCheckBoxChange}
			/>{' '}
			<label htmlFor={index}>{Storage}</label>
		</Col>
	));

	return <>{content}</>;
};

export default Storage;

Storage.propTypes = {
	product: PropTypes.array.isRequired,
	selected: PropTypes.bool.isRequired,
};
