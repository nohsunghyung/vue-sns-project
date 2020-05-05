<template>
	<div>
		<form @submit.prevent="onSubmitForm" class="form-wrapper">
			<div class="form-area">
				<label for="email">이메일</label>
				<input id="email" v-model="email" type="email" />
				<p class="validation-text" v-if="!emailValid && this.email">
					이메일 형식이 아닙니다.
				</p>
			</div>
			<div class="form-area">
				<label for="password">비밀번호</label>
				<input id="password" v-model="password" type="password" />
			</div>
			<div class="btn-group">
				<button
					type="submit"
					class="btn success"
					:disabled="!emailValid || !this.email || !this.password"
				>
					로그인
				</button>
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
	computed: {
		// 이메일 validation
		emailValid() {
			return this.$validation(this.email);
		},
	},
	methods: {
		// 로그인 폼 전송
		async onSubmitForm() {
			const userData = {
				email: this.email,
				password: this.password,
				// nickname: '노성형',
			};
			try {
				const data = await this.$store.dispatch('users/login', userData);
				this.$router.push('/');
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style></style>
