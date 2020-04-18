<template>
	<header id="header">
		<div class="header-inner">
			<h1>
				<nuxt-link :to="isLogin ? '/' : '/login'">NodeBird</nuxt-link>
			</h1>
			<nav>
				<ul class="gnb">
					<template v-if="isLogin">
						<li><nuxt-link :to="isLogin ? '/' : '/login'">메인</nuxt-link></li>
						<li><nuxt-link to="/profile">프로필</nuxt-link></li>
					</template>
					<template v-else>
						<li><nuxt-link to="/login">로그인</nuxt-link></li>
						<li><nuxt-link to="/signup">회원가입</nuxt-link></li>
					</template>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters('users', ['isLogin']),
	},
};
</script>

<style></style>
