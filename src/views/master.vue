<template>
  <div>
    <HeaderComponent />
    <NavBar />
    <router-view/>
    <FooterComponent />
  </div>
</template>
<script>
import NavBar from "../components/inc/navbar.vue";
import FooterComponent from "../components/inc/fotter.vue";
import HeaderComponent from "../components/inc/header.vue";

export default {
  name: "MasterComponent",
  components: {
    NavBar,
    FooterComponent,
    HeaderComponent,
  },
};
</script>