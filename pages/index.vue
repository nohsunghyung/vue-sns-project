<template>
	<div>
		<div class="card-box post-form-wrapper" v-if="isLogin">
			<post-form></post-form>
		</div>
		<div class="post-card-wrapper">
			<post-card
				v-for="post in postData"
				:key="post.id"
				:post="post"
			></post-card>
		</div>
	</div>
</template>

<script>
import PostForm from '~/components/PostForm.vue';
import PostCard from '~/components/PostCard.vue';
import { mapGetters } from 'vuex';
export default {
	components: {
		PostForm,
		PostCard,
	},
	computed: {
		// ...mapGetters('users', ['isLogin']),
		isLogin() {
			return this.$store.getters['users/isLogin'];
		},
		postData() {
			return this.$store.state.posts.postData;
		},
	},
};
</script>

<style></style>
