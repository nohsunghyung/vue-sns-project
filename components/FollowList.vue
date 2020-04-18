<template>
	<ul class="follow-list">
		<li class="item" v-for="user in users" :key="user.id">
			<div class="avatar">{{ user.name[0] }}</div>
			<div class="user-name">{{ user.name }}</div>
			<button type="button" @click="removeUser(user.id)" class="btn-delete">
				삭제
			</button>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		users: {
			type: Array,
			required: true,
		},
		removeUser: {
			type: Function,
			required: true,
		},
	},
};
</script>

<style></style>
