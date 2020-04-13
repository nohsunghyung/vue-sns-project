<template>
	<div>
		<form @submit.prevent="onSubmitForm" class="form-wrapper">
			<div class="form-area">
				<label for="email">이메일</label>
				<input id="email" v-model="email" type="email" />
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
			</div>
			<div class="term-check">
				<input type="checkbox" id="termChk" />
				<label for="termChk">회원가입에 동의하십니까?</label>
			</div>
			<div class="btn-group">
				<button type="submit" class="btn success">회원가입완료</button>
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
