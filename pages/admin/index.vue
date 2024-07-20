<template>
	<div>
		<h1>Welcome, {{ $store.state.user.email }}</h1>
		<Edit />
	</div>
</template>

<script>
import Edit from '~/components/admin/Edit.vue'
export default {
	middleware: 'auth',
	components: {
		Edit,
	},
}
</script>
