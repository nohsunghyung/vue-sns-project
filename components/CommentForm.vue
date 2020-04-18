<template>
	<form @submit.prevent="onSubmitForm">
		<div class="form-wrapper">
			<textarea
				name=""
				id=""
				placeholder="댓글을 달아주세요."
				v-model="content"
			></textarea>
			<button type="submit" class="btn success">댓글완료</button>
		</div>
	</form>
</template>

<script>
export default {
	props: {
		postId: {
			type: Number,
			required: true,
		},
	},
	data() {
		return {
			content: '',
		};
	},
	computed: {
		user() {
			return this.$store.state.users.userData;
		},
	},
	methods: {
		async onSubmitForm() {
			const commentData = {
				id: this.postId,
				user: this.user.nickname,
				content: this.content,
			};
			if (this.content.trim() === '') {
				alert('내용을 입력해주세요.');
				return false;
			}
			try {
				const data = await this.$store.dispatch(
					'posts/addComment',
					commentData,
				);
				this.content = '';
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style></style>
