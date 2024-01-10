import { ContenedorInfoPrimary, ContenedorInfoSecondary } from './estilos';
import { Cart } from '../Cart/index';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../../Data/Context/Context';
import { LoaderPage } from '../LoaderPage/LoaderPage';
import { Col, Container, Row } from 'react-bootstrap';
import './Estilos.css';

export const Profile = () => {
	let { profile } = useContext(DataContext);

	const [imageSrc, setImageSrc] = useState(null);
	useEffect(() => {
		const storedImage = localStorage.getItem('photo');
		if (storedImage) {
			setImageSrc(storedImage);
		}
	}, []);

	let content;

	switch (profile.status) {
		case 'idle':
			{
				content = 'No está cargando';
			}
			break;
		case 'loading':
			{
				content = <LoaderPage />;
			}
			break;
		case 'succeeded':
			{
				content = (
					<>
						<Container>
							<Row>
								<Col>
									<ContenedorInfoPrimary>
										<img
											src={imageSrc ? imageSrc : 'https://th.bing.com/th/id/OIP.z2EVNghKpSs2wUWRoIUOXAAAAA?rs=1&pid=ImgDetMain'}
											alt='Profile img'
										/>
										<p>{profile.data.name ? 'Nombre: ' + profile.data.name.firstname : 'Anonimo'}</p>
										<p>{profile.data.name ? 'Apellido: ' + profile.data.name.lastname : 'Anonimo'}</p>
										<p>{'Nombre de Usuario: ' + profile.data.username}</p>
										<p>{'Email: ' + profile.data.email}</p>
									</ContenedorInfoPrimary>
								</Col>
								<Col>
									<ContenedorInfoSecondary id='Contenedor-PageProfile'>
										<Cart />
									</ContenedorInfoSecondary>
								</Col>
							</Row>
						</Container>
					</>
				);
			}
			break;
		case 'failed':
			{
				content = <>{profile.error}</>;
			}
			break;
		default:
			content = 'Algo por defecto ';
			break;
	}

	return <>{content}</>;
};
