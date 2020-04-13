<template>
	<div>
		<form @submit.prevent="onSubmitForm" class="form-wrapper">
			<div class="form-area">
				<label for="email">이메일</label>
				<input id="email" v-model="email" type="email" />
			</div>
			<div class="form-area">
				<label for="password">비밀번호</label>
				<input id="password" v-model="password" type="password" />
			</div>
			<div class="btn-group">
				<button type="submit" class="btn success">로그인</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {
		onSubmitForm() {
			console.log(1);
		},
	},
};
</script>

<style></style>
