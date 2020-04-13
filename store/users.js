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
};

export const actions = {
	signup({ commit }, payload) {
		commit('setUser', payload);
	},
};
