<template>
	<header id="header">
		<div class="header-inner">
			<h1>
				<nuxt-link :to="isLogin ? '/' : '/login'">NodeBird</nuxt-link>
			</h1>
			<nav>
				<ul class="gnb">
					<template v-if="isLogin">
						<li class="search-area">
							<form @submit.prevent="onSearchForm">
								<input
									type="text"
									placeholder="검색어를 입력하세요."
									v-model="searchText"
								/>
								<button type="submit">검색</button>
							</form>
						</li>
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
	data() {
		return {
			searchText: '',
		};
	},
	computed: {
		...mapGetters('users', ['isLogin']),
	},
	methods: {
		onSearchForm() {
			if (this.searchText.trim() === '') {
				alert('검색어를 입력해주세요.');
				return false;
			} else {
				this.$router.push({ path: `/hashtag/${this.searchText}` });
				this.searchText = '';
			}
		},
	},
};
</script>

<style></style>
