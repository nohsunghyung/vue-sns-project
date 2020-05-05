import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.baseUrl,
});

// 회원가입
function signup(userData) {
	return instance.post('user', userData);
}

// 로그인
function loginUser(userData) {
	return instance.post('user/login', userData);
}

export { loginUser, signup };
