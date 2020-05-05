<template>
	<div>
		<form @submit.prevent="onSubmitForm" class="form-wrapper">
			<div class="form-area">
				<label for="email">이메일</label>
				<input id="email" v-model="email" type="text" />
				<p class="validation-text" v-if="!emailValid && this.email">
					이메일 형식이 아닙니다.
				</p>
			</div>
			<div class="form-area">
				<label for="nickname">닉네임</label>
				<input id="nickname" v-model="nickname" type="text" />
			</div>
			<div class="form-area">
				<label for="password">비밀번호</label>
				<input id="password" v-model="password" type="password" />
			</div>
			<div class="form-area">
				<label for="passwordChk">비밀번호 확인</label>
				<input id="passwordChk" v-model="passwordChk" type="password" />
				<p class="validation-text" v-if="!passwordChkValid && this.passwordChk">
					비밀번호가 다릅니다.
				</p>
			</div>
			<div class="term-check">
				<input type="checkbox" id="termsChk" @input="isTerms = !isTerms" />
				<label for="termsChk">회원가입에 동의하십니까?</label>
			</div>
			<div class="btn-group">
				<button
					type="submit"
					class="btn success"
					:disabled="!emailValid || !isTerms || !passwordChkValid"
				>
					회원가입완료
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
			nickname: '',
			password: '',
			passwordChk: '',
			isTerms: false,
		};
	},
	computed: {
		// 이메일 validation
		emailValid() {
			return this.$validation(this.email);
		},
		passwordChkValid() {
			return this.password === this.passwordChk;
		},
	},
	methods: {
		// 회원가입 폼 전송
		async onSubmitForm() {
			const userData = {
				email: this.email,
				nickname: this.nickname,
				password: this.password,
			};
			try {
				const data = await this.$store.dispatch('users/signup', userData);
				alert('회원가입이 완료되었습니다.');
				this.$router.push('/');
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style></style>
