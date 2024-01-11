import { ContenedorInfoPrimary, ContenedorInfoSecondary } from './estilos';
import { Cart } from '../Cart/index';
import { LoaderPage } from '../LoaderPage/LoaderPage';
import { Col, Container, Row } from 'react-bootstrap';
import './Estilos.css';
import { useSelector } from 'react-redux';
import { selectProfileError, selectProfileStatus } from '../../../Data/Store/Features/Profile/ProfileSlice';
import { useEffect, useState } from 'react';

import { GetDataLogin } from '../Components/getDataLogin';

export const Profile = () => {
	const status = useSelector(selectProfileStatus);
	const error = useSelector(selectProfileError);
	const { local, lenght } = GetDataLogin();

	const [imageSrc, setImageSrc] = useState(null);
	useEffect(() => {
		const storedImage = localStorage.getItem('photo');
		if (storedImage) {
			setImageSrc(storedImage);
		}
	}, []);

	let content;

	switch (status) {
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
						<Container fluid={true} >
							<Row>
								<Col>
									<ContenedorInfoPrimary>
										<img
											src={imageSrc ? imageSrc : 'https://th.bing.com/th/id/OIP.z2EVNghKpSs2wUWRoIUOXAAAAA?rs=1&pid=ImgDetMain'}
											alt='Profile img'
										/>
										<p>{local && lenght > 0 ? 'Nombre: ' + local.name.firstname : 'Anonimo'}</p>
										<p>{local && lenght > 0 ? 'Apellido: ' + local.name.lastname : 'Anonimo'}</p>
										<p>{'Nombre de Usuario: ' + local && lenght > 0 ? local.username : 'Anonimo'}</p>
										<p>{'Email: ' + local && lenght > 0 ? local.email : 'Anonimo'}</p>
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
				content = <>{error}</>;
			}
			break;
		default:
			content = 'Algo por defecto ';
			break;
	}

	return <>{content}</>;
};
