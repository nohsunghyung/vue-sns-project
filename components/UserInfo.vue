<template>
	<div class="card-box user-container">
		<div class="user-box">
			<strong class="user">{{ userData.nickname }}</strong
			>님 환영합니다.
		</div>
		<a href="javascript:void(0);" @click="logout" class="btn normal"
			>로그아웃</a
		>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	methods: {
		logout() {
			this.$store.commit('users/logout');
			this.$router.push({ path: '/login' });
		},
	},
	computed: {
		...mapState('users', ['userData']),
	},
};
</script>

<style></style>
