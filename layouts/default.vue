<template>
	<div>
		<app-header></app-header>
		<div class="contents">
			<div class="contents-layout">
				<div class="col col-4">
					<user-info></user-info>
				</div>
				<div class="col col-6">
					<nuxt />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AppHeader from '~/components/common/AppHeader.vue';
import UserInfo from '~/components/UserInfo.vue';
export default {
	name: 'default',
	components: {
		AppHeader,
		UserInfo,
	},
};
</script>

<style lang="scss">
@import '~/assets/css/reset.css';
@import '~/assets/scss/common.scss';
</style>
