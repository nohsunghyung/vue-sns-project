export const state = () => ({
	userData: '',
	followingList: [
		{ id: 1, name: '노군' },
		{ id: 2, name: '엘리' },
		{ id: 3, name: '바보' },
	],
	followerList: [
		{ id: 1, name: '성형' },
		{ id: 2, name: '후후' },
		{ id: 3, name: '가가' },
	],
});

export const getters = {
	isLogin: state => {
		return state.userData != '';
	},
};

export const mutations = {
	setUser(state, payload) {
		state.userData = payload;
	},
	logout(state) {
		state.userData = '';
	},
	onChangeName(state, payload) {
		state.userData.nickname = payload;
	},
	removeFollowing(state, payload) {
		const idx = state.followingList.findIndex(v => v.id === payload);
		state.followingList.splice(idx, 1);
	},
	removeFollower(state, payload) {
		const idx = state.followerList.findIndex(v => v.id === payload);
		state.followerList.splice(idx, 1);
	},
};

export const actions = {
	signup({ commit }, payload) {
		commit('setUser', payload);
	},
	login({ commit }, payload) {
		commit('setUser', payload);
	},
	onChangeName({ commit }, payload) {
		commit('onChangeName', payload);
	},
	deleteFollow({ commit }, payload) {
		commit('deleteFollow', payload);
	},
	removeFollowing({ commit }, payload) {
		commit('removeFollowing', payload);
	},
	removeFollower({ commit }, payload) {
		commit('removeFollower', payload);
	},
};
