<template lang="pug">
.body-container
	app-header
	nuxt.body.mt-2.mb-2
	app-footer
	loader(:loading="loading")
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Loader from '~/components/Loader.vue'
import { mapState } from 'vuex'

export default {
	components: {
		appHeader: Header,
		appFooter: Footer,
		loader: Loader,
	},
	computed: {
		...mapState(['loading']),
	},
	async mounted() {
		await this.$store.dispatch('nuxtClientInit')
	},
}
</script>

<style>
/* Carousel Styles */
.carousel-indicators,
.carousel-control-prev,
.carousel-control-next {
	background-color: #222;
	opacity: 0.1;
	transition: opacity 0.15s ease;
}
.carousel-indicators {
	margin-bottom: -0.01em;
	opacity: 0.3;
	height: 40px;
}

/* Header Styles */
h1,
h4 {
	text-shadow: #222 0.1em 0.1em 0.1em;
	color: #fff;
}
h2 {
	color: #28a745;
}
.card-header {
	background-color: #28a745;
	color: #fff;
}

/* Body Styles */
.body-container {
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.body {
	min-height: calc(100vh - 82px);
}

/* General Styles */
html {
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}
*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}
a {
	text-decoration: none !important;
}

/* Dropdown Styles */
.dropdown-item.active {
	background-color: #cccccc;
}
.dropdown-item.active:active {
	background-color: #cccccc;
}

/* Button Styles */
.button--green {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #3b8070;
	color: #3b8070;
	text-decoration: none;
	padding: 10px 30px;
}
.button--green:hover {
	color: #fff;
	background-color: #3b8070;
}
.button--grey {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #35495e;
	color: #35495e;
	text-decoration: none;
	padding: 10px 30px;
	margin-left: 15px;
}
.button--grey:hover {
	color: #fff;
	background-color: #35495e;
}
</style>
