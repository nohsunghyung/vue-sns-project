export const state = () => ({
	userData: '',
	followingList: [],
	followerList: [],
	hasMoreFollowing: true,
	hasMoreFollower: true,
});

const totalFollowing = 8;
const totalFollower = 8;
const limit = 3;

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
	loadFollowings(state) {
		const diff = totalFollowing - state.followingList.length;
		const userLegnth = diff > limit ? limit : diff;
		const fakeUser = Array(userLegnth)
			.fill()
			.map(() => ({
				id: Math.random() * 10,
				name: Math.ceil(Math.random() * 1000).toString(),
			}));
		state.followingList = state.followingList.concat(fakeUser);
		state.hasMoreFollowing = fakeUser.length === limit;
	},
	loadFollowers(state) {
		const diff = totalFollower - state.followerList.length;
		const userLegnth = diff > limit ? limit : diff;
		const fakeUser = Array(userLegnth)
			.fill()
			.map(() => ({
				id: Math.random() * 10,
				name: Math.ceil(Math.random() * 1000).toString(),
			}));
		state.followerList = state.followerList.concat(fakeUser);
		state.hasMoreFollower = fakeUser.length === limit;
	},
};

export const actions = {
	signup({ commit }, payload) {
		commit('setUser', payload);
	},
	async login({ commit }, payload) {
		try {
			const { data } = await this.$axios.post(
				'http://localhost:3085/user/login',
				payload,
			);
			commit('setUser', data);
		} catch (error) {
			console.log(error);
		}
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
	loadFollowings({ commit, state }) {
		if (state.hasMoreFollowing) {
			commit('loadFollowings');
		}
	},
	loadFollowers({ commit, state }) {
		if (state.hasMoreFollower) {
			commit('loadFollowers');
		}
	},
};
