<template>
	<div class="post-form-wrapper">
		<div class="form-inner">
			<form @sumit="onSubmitForm"></form>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		onSubmitForm() {
			console.log(1);
		},
	},
};
</script>

<style></style>
