
export const createUser = (userData) => {
	return (dispatch) => {
		fetch('https://fakestoreapi.com/users', {
			method: 'POST',
			body: JSON.stringify(userData),
		})
			.then((res) => res.json())
			.then((json) => {
				dispatch({ type: 'USER_CREATED', payload: json });
			})
			.catch((error) => {
				// Manejar errores
				dispatch({ type: 'USER_CREATE_ERROR', payload: error.message });
			});
	};
};
