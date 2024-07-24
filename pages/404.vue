<template>
	<div>
		<h1>404 - Page Not Found</h1>
		<nuxt-link :to="$route.path">{{ $route.path }}</nuxt-link>
		<p>The page you are looking for does not exist.</p>
		<nuxt-link to="/">Home</nuxt-link>
	</div>
</template>
