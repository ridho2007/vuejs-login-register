<template>
  <div class="kotak_login">
    <h1 class="tulisan_login">login</h1>
    <form @submit="login">
      <label>username</label>
      <input
        type="text"
        required
        name="username"
        v-model="form.username"
        class="form_login"
        placeholder="username atau email"
      />
      <label>password</label>
      <input
        type="password"
        name="password"
        v-model="form.password"
        required
        class="form_login"
        placeholder="passwords.."
      />
      <button type="submit" class="btn btn-primary poll">
        login
      </button>
    </form>
    <center>
    <p class="f00ter">
      <a href="/register" class="registerdong">register</a>
      <span class="notReg">jika blum memiliki akun</span>
    </p>
    </center>
  </div>
</template>
<script>
// import axios
import axios from "axios";
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        username: "",
        password: "",
        useres: {},
      }, 
    };
  },
  methods: {
    async getUser() {
      const user = await axios.get(" http://localhost:3000/akuns");
      this.useres = user.data;
    },
    // fungsi tombol login
    login(e) {
      e.preventDefault();
      const login = this.useres.find(
        (data) =>
          data.username === this.form.username &&
          data.password === this.form.password
      ); 
      if (login === undefined) {
        alert("username or pasword not found");
      }else {
        var convertToString = JSON.stringify(login);
        sessionStorage.setItem("USER_DATA", convertToString);
        sessionStorage.setItem("USER",login.role);
        this.$router.push("/home");
        window.location.reload()
      }
    },
  },
  mounted() {
    this.getUser();
    // fungsi togle pada app.vue
    this.$emit("toggleBar");
      },
};
</script>

