<template>
	<div>
		<h2 class="page-title">회원가입</h2>
		<signup-form></signup-form>
	</div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
export default {
	layout: 'beforeLogin',
	components: {
		SignupForm,
	},
};
</script>

<style></style>
