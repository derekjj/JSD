<template lang="pug">
  div
    b-navbar(toggleable="sm" type="dark" variant="success" fixed="top")
      
      b-navbar-brand.d-none.d-sm-block(to="/") Johnston Software Development
      b-navbar-brand.d-sm-none(to="/") JS Development

      b-navbar-toggle(target="nav-collapse")

      b-collapse(id="nav-collapse" is-nav)
        b-navbar-nav.ml-auto
          //- b-nav-item(to="/about",
          //-           activeClass="active") About
          b-nav-item(to="/projects",
                    activeClass="active") Projects
          //- b-nav-item(to="/timeline",
          //-           activeClass="active") Timeline
          //- b-nav-item-dropdown(text="Services" right)
            b-dropdown-item(to="/services/consulting",
                            activeClass="active") Consulting
            b-dropdown-item(to="/services/web",
                            activeClass="active") Web
            b-dropdown-item(to="/services/mobile",
                            activeClass="active") Mobile
</template>

<style scoped>
.dropdown-menu {
	background-color: #28a745 !important;
}
.hoverable:hover {
	-webkit-box-shadow: none;
	box-shadow: 0px 2px 2px 2px #cccccc;
	-webkit-transition: all 0.8s ease-in-out;
	transition: all 0.8s ease-in-out;
}
</style>
