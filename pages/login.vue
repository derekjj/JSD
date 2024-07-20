<template>
	<div>
		<h1>Login</h1>
		<form @submit.prevent="login">
			<div>
				<label for="email">Email</label>
				<input type="email" v-model="email" id="email" />
			</div>
			<div>
				<label for="password">Password</label>
				<input type="password" v-model="password" id="password" />
			</div>
			<button type="submit">Login</button>
		</form>
	</div>
</template>

<script>
// TODO: handle failed login
// TODO: Auto redirect to admin if logged in already
export default {
	data() {
		return {
			email: '',
			password: '',
		}
	},
	methods: {
		async login() {
			try {
				const { success, error } = await this.$store.dispatch('login', {
					email: this.email,
					password: this.password,
				})
				if (success) {
					this.$router.push('/admin')
				} else {
					console.error('Login error:', error)
					// Handle login error
				}
			} catch (error) {
				console.error('An error occurred:', error.message)
			}
		},
	},
}
</script>
