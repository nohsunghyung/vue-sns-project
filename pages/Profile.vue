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
				:users="followingList"
				:removeUser="removeFollwing"
			></follow-list>
			<button
				type="button"
				class="btn normal btn-more"
				@click="loadFollowings"
				v-if="hasMoreFollowing"
			>
				더보기
			</button>
		</div>
		<div class="card-box follow-box">
			<strong class="title">팔로워</strong>
			<follow-list
				:users="followerList"
				:removeUser="removeFollower"
			></follow-list>
			<button
				type="button"
				class="btn normal btn-more"
				@click="loadFollowers"
				v-if="hasMoreFollower"
			>
				더보기
			</button>
		</div>
	</div>
</template>

<script>
import FollowList from '~/components/FollowList.vue';
import { mapState } from 'vuex';
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
		...mapState('users', [
			'followingList',
			'followerList',
			'hasMoreFollowing',
			'hasMoreFollower',
		]),
	},
	fetch({ store }) {
		store.dispatch('users/loadFollowings');
		store.dispatch('users/loadFollowers');
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
		removeFollower(id) {
			this.$store.dispatch('users/removeFollower', id);
		},
		loadFollowings() {
			this.$store.dispatch('users/loadFollowings');
		},
		loadFollowers() {
			this.$store.dispatch('users/loadFollowers');
		},
	},
};
</script>

<style></style>
