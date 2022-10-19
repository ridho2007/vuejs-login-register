<template>

  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-if="adminAccess ">
            <a class="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li class="nav-item" v-if="adminAccess"><router-link class="nav-link active" aria-current="page"  to="/about">About</router-link></li>
          <li class="nav-item" v-if="adminAccess ">
            <router-link class="nav-link active" aria-current="page" to="/about">motor</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/produk">Produk</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/detail">Detail</router-link>
          </li>
        </ul>
          <a class="btn btn-outline-success d-flex" @click="out()" type="submit">Logout</a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  computed: {
    adminAccess() {
      return sessionStorage.getItem("USER") ==="admin";
    },
  },
  methods: {
    out() {
      sessionStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>
<style>
.navbar-item {
  margin: auto;
}
.logout {
  border: none;
  text-decoration: none;
}
</style>
