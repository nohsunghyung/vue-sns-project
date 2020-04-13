<template>
	<div>
		<h2 class="page-title">로그인</h2>
		<login-form></login-form>
	</div>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue';
export default {
	layout: 'beforeLogin',
	components: {
		LoginForm,
	},
};
</script>

<style></style>
