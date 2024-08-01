<template>
	<div></div>
</template>
<script lang="ts">
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters(['jsd']),
	},
	watch: {
		jsd(val) {
			// handle when direct loading on page from url
			if (val && val.length > 0) {
				this.$router.push('/projects/' + val[0].id)
			}
		},
	},
	mounted() {
		// handle when navigating to page from another page
		if (this.jsd && this.jsd.length > 0) {
			this.$router.push('/projects/' + this.jsd[0].id)
		}
	},
}
</script>
