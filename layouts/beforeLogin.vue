<template>
	<div>
		<app-header></app-header>
		<div class="contents">
			<div class="form-layout">
				<div class="form-inner">
					<nuxt />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import AppHeader from '~/components/common/AppHeader.vue';
export default {
	name: 'beforeLogin',
	components: {
		AppHeader,
	},
};
</script>

<style lang="scss">
@import '~/assets/css/reset.css';
// @import '~/assets/scss/common.scss';
</style>
