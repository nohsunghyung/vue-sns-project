export const state = () => ({
	postData: [],
});

export const mutations = {
	addMainPost(state, payload) {
		state.postData.unshift(payload);
	},
	deletePost(state, payload) {
		const idx = state.postData.findIndex(v => v.id === payload);
		state.postData.splice(idx, 1);
	},
	addComment(state, payload) {
		const idx = state.postData.findIndex(v => v.id === payload.id);
		state.postData[idx].comment.unshift(payload);
	},
};

export const actions = {
	addPost({ commit }, payload) {
		commit('addMainPost', payload);
	},
	deletePost({ commit }, payload) {
		commit('deletePost', payload);
	},
	addComment({ commit }, payload) {
		commit('addComment', payload);
	},
};
