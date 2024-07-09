<template lang="pug">
div
  div(v-for="topic in topics" :key="topics.id")
    h1.text-center {{topic.title}}
    .row
      .col-md-12
        .card.hoverable.m-1
          router-link(to="/services/mobile",
                      activeClass="active",)
          .card-img-top
          .card-body
            .card-text
            | {{topic.description}}
</template>

<script>
export default {
    data() {
        return {      
            topics: [
                // {
                //   id: 0,
                //   title: "Childhood",
                //   description: ".",
                // },
                {
                  id: 1,
                  title: "Highschool",
                  description: "A founding member of the Website team and co-op placement as the tech admin assistant.",
                },
                {
                  id: 2,
                  title: "College",
                  description: "Completed 3 Year Advanced Diaploma as a Computer Programming Analyst.",
                },
                {
                  id: 3,
                  title: "Oiika",
                  description: "During my College program, I joined the Oiika Team.",
                },
                {
                  id: 3,
                  title: "E-Data Now!",
                  description: "For my field placement I joined the E-Data Team. After witch I was hired on as a Software Developer.",
                },
            ]
        }
    }
}
</script>