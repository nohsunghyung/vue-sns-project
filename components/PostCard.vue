<template>
	<div class="card-box post-card-item">
		<div class="post-card">
			<strong class="post-writer"
				><nuxt-link :to="`/user/${post.id}`">{{ post.user }}</nuxt-link></strong
			>
			<p class="post-content">{{ post.content }}</p>
			<div class="controller">
				<button type="button">새로고침</button>
				<button type="button">좋아요</button>
				<button type="button" @click="onComment">comment</button>
				<button type="button">수정</button>
				<button type="button" @click="onDeletePost(post.id)">삭제</button>
			</div>
		</div>
		<div class="post-comment" v-if="isComment">
			<comment-form :postId="post.id"></comment-form>
			<ul class="comment-list" v-if="post.comment.length">
				<li class="item" v-for="(item, index) in post.comment" :key="index">
					<div class="avatar">{{ item.user[0] }}</div>
					<div class="description">
						<strong class="user-name">{{ item.user }}</strong>
						<p class="comment">{{ item.content }}</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import CommentForm from '~/components/CommentForm.vue';
export default {
	components: {
		CommentForm,
	},
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			isComment: false,
			content: '',
		};
	},
	methods: {
		onDeletePost(postId) {
			const confirmChk = confirm('삭제하시겠습니까?');
			if (confirmChk) {
				this.$store.dispatch('posts/deletePost', postId);
			} else {
				return false;
			}
		},
		onComment() {
			this.isComment = !this.isComment;
		},
	},
};
</script>

<style></style>
