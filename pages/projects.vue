<template lang="pug">
  div
    .container.col-12
      h1.text-center Projects
    .row
      .col-md-2
      .col-md-8.m-4
        .card
          .card-title
            b-carousel(
              id="carousel-fade"
              v-model="slide"
              :interval="0"
              fade
              controls
              indicators
              img-width="970"
              img-height="925"
              style="")
              a(:href="project.link" v-for="project in projects" :key="projects.id")
                b-carousel-slide(:img-src="project.image")
                //- img.card-img-top(:src="project.image" alt="Card image cap")
            .row
              .col-md.float-md-left
                | {{projects[slide].title}}
              .col-lg.float-md-right
                b {{projects[slide].dates}}
            .row
              .col-12
                a(:href="project.url") {{project.url}}
          .card-body
            .row
              .btn-group.btn-group-toggle(data-toggle="buttons").col-12
                label.btn.btn-success(v-bind:class="{ active: tab=='about' }")
                  input(@click="tab='about'" type="radio" name="options" id="option1" autocomplete="off" checked)
                  | About
                label.btn.btn-success(v-bind:class="{ active: tab=='tech' }")
                  input(@click="tab='tech'" type="radio" name="options" id="option2" autocomplete="off")
                  | Tech
                  
            .m-2
              b {{projects[slide].company}}
            div(v-if="tab=='about'")
              | {{projects[slide].about}}{{projects[slide].description}}
            div(v-if="tab=='tech'")
              i(v-for="tech in projects[slide].tech") - {{tech}} -
      .col-lg-2
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      loading: false,
      post: null,
      error: null,
      desc: null,
      tab: "about"
    };
  },
  created() {
    this.selectProject();
    this.project = this.$store.state.projects
    
  },
  watch: {
    $route: "selectProject"
  },
  
  computed: {
    ...mapGetters([
      'projects',
    ]),
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = null;
    },
    onSlideEnd(slide) {
      this.sliding = null;
    },
    selectProject() {
      var pro = this.$route.params.project;
      if (typeof pro == "undefined" || pro == null) {
        pro = 0;
      }
      this.slide = pro;
    },
  }
};
</script>