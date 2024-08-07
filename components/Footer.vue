<template lang="pug">
footer.d-flex.justify-content-around.social-footer.m-0
  .social-footer-icons        
    //- a.col-sm-3(href="https://www.facebook.com/DJDesign.ca")
      i.fa.fa-facebook(aria-hidden="true")
    a.col-sm-3(href="https://github.com/derekjj")
      i.fa.fa-github(aria-hidden="true")
    a.col-sm-3(href="https://www.linkedin.com/company/johnston-software-development")
      i.fa.fa-linkedin(aria-hidden="true")
    router-link.col-sm-3(to="/contact")
      i.fa.fa-address-card-o(aria-hidden="true")
      
</template>

<style scoped>
footer {
	padding: 10px;
	background-color: #28a745;
  height: 50px;
}

.social-footer .social-footer-icons .fa {
	font-size: 1.6rem;
	color: #fefefe;
}

.social-footer .social-footer-icons .fa:hover {
	color: #4a4a4a;
	transition: color 0.3s ease-in;
}
</style>
