export default function({ store, redirect }) {
	if (!store.state.users.userData) {
		redirect('/login');
	}
}
