<template lang="pug">  
  //- div
    .container.col-12
        h1.text-center Testimonials
    .row
      .col-md-4(v-for="testimonial in testimonials")
        .card.hoverable.m-1
          router-link(to="/services/mobile",
                      activeClass="active",)
          .card-img-top
          .card-body
            .card-title
            | {{testimonial.author}}
            .card-subtitle
            | Subtitle
            .card-text
            | text
            a.card-link(to="/")
            | link
</template>

<script>
export default {
	data() {
		return {
			testimonials: [
				{
					author: "Who's Jimmy",
					description: '',
					raiting: null,
					image: null,
				},
				{
					author: "Who's Jimmy",
					description: '',
					raiting: null,
					image: null,
				},
				{
					author: "Who's Jimmy",
					description: '',
					raiting: null,
					image: null,
				},
				{
					author: "Who's Jimmy",
					description: '',
					raiting: null,
					image: null,
				},
				{
					author: "Who's Jimmy",
					description: '',
					raiting: null,
					image: null,
				},
			],
		}
	},
}
</script>
