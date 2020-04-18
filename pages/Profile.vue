<template>
	<div>
		<div class="card-box profile-box">
			<strong class="title">내 프로필</strong>
			<form @submit.prevent="onSubmitForm">
				<input type="text" placeholder="닉네임 수정" v-model="nickname" />
				<button type="submit" class="btn success">수정</button>
			</form>
		</div>
		<div class="card-box follow-box">
			<strong class="title">팔로잉</strong>
			<follow-list
				:users="following"
				:removeUser="removeFollwing"
			></follow-list>
		</div>
		<div class="card-box follow-box">
			<strong class="title">팔로워</strong>
			<follow-list :users="follower" :removeUser="removeFollwer"></follow-list>
		</div>
	</div>
</template>

<script>
import FollowList from '~/components/FollowList.vue';
export default {
	components: {
		FollowList,
	},
	data() {
		return {
			nickname: '',
		};
	},
	computed: {
		follower() {
			return this.$store.state.users.followerList;
		},
		following() {
			return this.$store.state.users.followingList;
		},
	},
	methods: {
		onSubmitForm() {
			if (this.nickname.trim() === '') {
				alert('닉네임을 입력해주세요.');
			} else {
				this.$store.dispatch('users/onChangeName', this.nickname);
				this.nickname = '';
			}
		},
		removeFollwing(id) {
			this.$store.dispatch('users/removeFollowing', id);
		},
		removeFollwer(id) {
			this.$store.dispatch('users/removeFollower', id);
		},
	},
};
</script>

<style></style>
