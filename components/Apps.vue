<template lang="pug">
.container.bg-transparent
  .row
    .col-12
        h2.text-center Apps
  .row
    .col-12
      b-carousel(
        id="carousel-1"
        v-model="slide"
        :interval="5000"
        controls
        fade
        indicators
        background="#ababab"
        img-width="970"
        img-height="925"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd")
        router-link(:to="{name: 'projects', params: { project:project.id } }" v-for="project in projects" :key="projects.id")
          b-carousel-slide(:img-src="project.image")
      .card-header.p-3(style="color: black; background-color: #FFF;")
        h3 {{projects[slide].company}}
      //- TODO: bug fix long descriptions on mobile screen overflowing
      .card-body
        .card-text.p-3(style="color: black; min-height: 200px; background-color: #FFF;") {{projects[slide].description || projects[slide].shortDescription}}
</template>

<script>
import { mapGetters } from 'vuex'
// TODO: merge with Websites and projects
// TODO: bug fix long descriptions on mobile screen overflowing
export default {
	data() {
		return {
			slide: 0,
			sliding: null,
		}
	},
	computed: {
		...mapGetters({ projects: 'apps' }),
	},
	methods: {
		onSlideStart(slide) {
			this.sliding = true
		},
		onSlideEnd(slide) {
			this.sliding = true
		},
	},
}
</script>

<style scoped>
.card .card-subtitle .card-text {
	color: black !important;
}
</style>
