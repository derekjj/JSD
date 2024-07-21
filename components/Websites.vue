<template lang="pug">
.container-fluid
	.row
		.col
			h2.text-center Projects
	.row
		.col-md-6.col-lg-4(v-for="project in projects" :key="project.id")
			nuxt-link(:to="'/projects/' + project.id " )
				.card.h-100
					//- router-link(:to="project.link" v-for="project in projects" :key="projects.id")
					.card-header.p-3(style="color: black; background-color: #FFF;")
						img.screen-shot(:src="project.image")
						h3.text-primary {{project.company}}
					//- TODO: bug fix long descriptions on mobile screen overflowing
					.card-body
						.card-text.p-3(style="color: black; min-height: 200px; background-color: #FFF;") {{project.teaser || project.description || project.shortDescription}}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			slide: 0,
			sliding: null,
		}
	},
	computed: {
		...mapGetters({ projects: 'jsd' }),
	},
}
</script>
<style scoped>
.card .card-subtitle .card-text {
	color: black !important;
}
img.screen-shot {
	width: 100%;
}

.card {
	background-color: white;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1); /* Soft shadow for floating effect */
	transition: transform 0.2s, box-shadow 0.2s; /* Smooth transition for hover effect */
}

.card:hover {
	transform: translateY(-10px); /* Slight lift on hover */
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 40px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
}
</style>
