import { useContext, useState } from 'react';
import { BtnLogin, BtnSwitch, Contenedor, ContenedorDerecho, ContenedorIsquierdo, ContenedorLetras, ContenedorLogin, ContenedorSignUp, Letras, LetrasHint } from './estilos';
import { DataContext } from '../../../Data/Context/Context';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectAllprofile } from '../../../Data/Store/Features/Profile/ProfileSlice';

export const LoginForm = () => {
	const { profile } = useContext(DataContext);
	const dataSelected = useSelector(selectAllprofile);

	const [profileData, setProfileData] = useState([]);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [lastname, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [photoUrl, setPhoto] = useState('');
	const [watch, setWatch] = useState(!profile.isLocal);
	const [btnText, setBtnText] = useState(watch ? ['Crear', 'Cuenta'] : ['Iniciar', 'Sesión']);

	useEffect(() => {
		if (profile.status === 'succeeded') {
			setProfileData([...dataSelected]);
			const numProfile = Math.floor(Math.random() * 10);
			setProfileData(dataSelected[numProfile]);
		}
	}, [profile.status, dataSelected]);

	const handleLogin = () => {
		const userData = { username, password, name, lastname, email, id: 1, photo: photoUrl };
		if (!watch) {
			Object.keys(userData).forEach((key) => localStorage.setItem(key, userData[key]));
		}
	};

	const handleClick = () => {
		setWatch(!watch);
		setBtnText(watch ? ['Iniciar', 'Sesión'] : ['Crear', 'Cuenta']);
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = (e) => {
			const photoUrl = e.target.result;
			setPhoto(photoUrl);
		};
		reader.readAsDataURL(file);
	};

	return (
		<Contenedor display={watch}>
			<ContenedorIsquierdo display={watch}>
				<div>
					<Letras>Hint</Letras>
				</div>
				<article>
					<Letras> Usuario: {profileData.username ? profileData.username : 'Not Found'}</Letras>
					<Letras>Contraseña: {profileData.password ? profileData.password : 'Not Found'} </Letras>
					<LetrasHint>Este usuario es para probar</LetrasHint>
				</article>
			</ContenedorIsquierdo>

			<ContenedorDerecho>
				<ContenedorLetras>
					<p>{btnText[0]}</p>
					<p>{btnText[1]}</p>
				</ContenedorLetras>
				<div>
					<ContenedorSignUp display={watch}>
						<input
							type='text'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder='Nombre de usuario'
						/>
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder='Contraseña'
						/>
						<input
							type='text'
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder='Nombre'
						/>
						<input
							type='text'
							value={lastname}
							onChange={(e) => setLastName(e.target.value)}
							placeholder='Apellido'
						/>
						<input
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder='Email'
						/>
						<input
							type='file'
							onChange={(e) => handleFileChange(e)}
						/>
					</ContenedorSignUp>

					<ContenedorLogin display={watch}>
						<input
							type='text'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder='Nombre de usuario'
						/>
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder='Contraseña'
						/>
					</ContenedorLogin>
				</div>
				<BtnLogin
					id='boton'
					onClick={handleLogin}>
					{' '}
					Aceptar
				</BtnLogin>
				<BtnSwitch
					id='boton'
					onClick={() => handleClick()}>
					{' '}
					Switch{' '}
				</BtnSwitch>
			</ContenedorDerecho>
		</Contenedor>
	);
};
