import { auth } from '~/plugins/firebase'

export default function ({ store, redirect, route }) {
	// const userData = localStorage.getItem('user')
	// console.log('set user', userData)
	// if (userData) {
	// 	console.log('set user', userData)
	// 	store.commit('setUser', JSON.parse(userData))
	// }
	auth.onAuthStateChanged((user) => {
		//if session exists setuser
		// const userData = localStorage.getItem('user')
		// console.log('set user', userData)
		// if (userData) {
		// 	console.log('set user', userData)
		// 	store.commit('setUser', JSON.parse(userData))
		// 	return
		// }
		//TODO: Bug fix if logged in and not in admin it redirects to home page on reload
		if (user != undefined && route.path.startsWith('/admin')) {
			redirect('/login')
		} else if (!route.path == '/login') {
			console.log('not login', user)
			if (user) {
				store.commit('setUser', user)
			}
		}
	})
}
