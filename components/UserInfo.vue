<template>
	<div>
		<div class="user-container">
			<div class="user-box">
				<strong class="user">노성형</strong>님 환영합니다.
			</div>
			<a href="javascript:void(0);" @click="logout" class="btn normal"
				>로그아웃</a
			>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		logout() {
			this.$store.dispatch('users/logout');
			this.$router.push({ path: '/login' });
		},
	},
};
</script>

<style></style>
