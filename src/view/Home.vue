<template>
    <div id="home">
         <NavBar />
         <h1>ini halaman page</h1>
    </div>

</template>
<script>

import NavBar from '../components/navbar.vue';
export default {
   name: 'HomePage',
   components: {
    NavBar 
  },
  mounted() {
    if (!sessionStorage.getItem("USER_DATA")){
  this.$router.push("/");
  }
  },
};
</script>