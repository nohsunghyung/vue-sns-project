export const state = () => ({
	userData: null,
});

export const getters = {
	isLogin: state => {
		return state.userData != null;
	},
};

export const mutations = {
	setUser(state, payload) {
		state.userData = payload;
	},
	logout(state) {
		state.userData = null;
	},
};

export const actions = {
	signup({ commit }, payload) {
		commit('setUser', payload);
	},
	login({ commit }, payload) {
		commit('setUser', payload);
	},
};
