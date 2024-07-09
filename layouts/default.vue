<template lang="pug">
  div
    app-header
    nuxt.body.mt-2.mb-2
    app-footer
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>
.carousel-indicators, .carousel-control-prev, .carousel-control-next{
  background-color: #222;
  opacity: 0.1;
  transition: opacity 0.15s ease;
}
.carousel-indicators {
  margin-bottom: -0.01em; 
  opacity: 0.3;
  height: 40px;
}

h1, h4{
  text-shadow: #222 0.1em 0.1em 0.1em;
  color: #FFF;
}

h2{
  color: #28a745;
}

.card-header {
  background-color: #28a745;
  color: #FFF;
}

.body {  
  padding: 45px 0 0 0;
  margin: 0 auto;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.bg-transparent {
  opacity: 1;
  filter: alpha(opacity=0); /* For IE8 and earlier */
}

.hoverable:hover {
  -webkit-box-shadow: none;
  box-shadow: 3px 5px #CCCCCC;
  -webkit-transition: all 0.80s ease-in-out;
  transition: all 0.80s ease-in-out;
}
.hoverable {
  -webkit-box-shadow: none;
  box-shadow: 0px 0px 0px 0px #CCCCCC;
  -webkit-transition: all 0.50s ease-out;
  transition: all 0.50s ease-out;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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
.dropdown-item.active {
  background-color: #CCCCCC;
}
.dropdown-item.active:active {
  background-color: #CCCCCC;
}

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
