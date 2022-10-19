<template>
  <div id="home">
    <NavBar />

    <div class="induk" style="background-color: salmon">
      <!-- Modal Add -->
      <div>
        <!-- Button trigger modal -->
        <br />
        <div class="btn11">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add
          </button>
        </div>
        <br />
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  form <span v-show="updateSubmitjakarta">tambah</span>
                  <span v-show="updateSubmitjakarta">update</span>
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <!-- masukan -->
                <form id="atas" @submit.prevent="add">
                  <div class="jakarta">
                    <input type="hidden" v-model="form.id" />
                    <div>
                      <label for="">kota/kab</label><br />
                      <input type="text" v-model="form.kota" required />
                    </div>
                    <br />
                    <div>
                      <label for="">ukuran</label><br />
                      <input type="text" v-model="form.ukuran" required />
                    </div>
                    <br />
                    <div>
                      <label for="">j. kecamatan</label><br />

                      <input type="text" v-model="form.jumlah" required />
                    </div>
                    <br />
                    <div>
                      <label for="">wali kota</label><br />
                      <input type="text" v-model="form.iconkota" required />
                    </div>
                    <br />
                    <div>
                      <label for="">lambang kota</label><br />
                      <input type="text" v-model="form.image" required />
                    </div>
                    <br />
                  </div>
                  <div class="btn1">
                    <button
                      class="btn btn-secondary"
                      type="submit"
                      v-show="!updateSubmit"
                    >
                      Tambahkan
                    </button>
                    <!-- jika tidak update maka tombol update tidak muncul -->
                    <button
                      type="button"
                      v-show="updateSubmit"
                      @click="update(form)"
                    >
                      edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      @click="close"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Database -->
      <table class="table" border="1" style="width: 90%">
        <tr class="tr">
          <th>kota/kab</th>
          <th>kota/kab</th>
          <th>ukuran</th>
          <th>jumlah.kecamatan</th>
          <th>wali kota</th>
          <th>lambang</th>
          <th>action</th>
        </tr>

        <tr class="tr" v-for="(jakarta, index) in jakartas" :key="jakarta.id">
          <td>
            <span class="bb"> {{ index + 1 }}</span> &#160;
          </td>
          <td>
            <span class="bb"> {{ jakarta.kota }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ jakarta.ukuran }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ jakarta.jumlah }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ jakarta.iconkota }}</span>
            &#160;
          </td>
          <td>
            <span><img :src="jakarta.image" alt="" width="100px" /></span>
            &#160;
          </td>

          <td class="btn2">
            <a href="#exampleModalLabel">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                class="aa"
                @click="edit(jakarta)"
              >
                <i class="fas fa-wrench"></i>Edit
              </button></a
            >
            <button class="aa" @click="del(jakarta)">
              <i class="fas fa-trash-alt"></i>Delete
            </button>
          </td>
        </tr>
      </table>

      <!-- table 2 -->
      <div>
        <!-- Button trigger modal -->
        <br />
        <div class="btn11">
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#bali"
          >
            Add
          </button>
        </div>
        <br />
        <!-- Modal -->
        <div
          class="modal fade"
          id="bali"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  formbali <span v-show="updateSubmitjakarta">tambah</span>
                  <span v-show="updateSubmitjakarta">update</span>
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <!-- masukan -->
                <form id="atas" @submit.prevent="addbali">
                  <div class="jakarta">
                    <input type="hidden" v-model="formbali.id" />
                    <div>
                      <label for="">kota/kab</label><br />
                      <input type="text" v-model="formbali.kota" required />
                    </div>
                    <br />
                    <div>
                      <label for="">ukuran</label><br />
                      <input type="text" v-model="formbali.ukuran" required />
                    </div>
                    <br />
                    <div>
                      <label for="">j. kecamatan</label><br />

                      <input type="text" v-model="formbali.jumlah" required />
                    </div>
                    <br />
                    <div>
                      <label for="">wali kota</label><br />
                      <input type="text" v-model="formbali.iconkota" required />
                    </div>
                    <br />
                    <div>
                      <label for="">lambang kota</label><br />
                      <input type="text" v-model="formbali.image" required />
                    </div>
                    <br />
                  </div>
                  <div class="btn1">
                    <button
                      class="btn btn-secondary"
                      type="submit"
                      v-show="!updateSubmit"
                    >
                      Tambahkan
                    </button>
                    <!-- jika tidak update maka tombol update tidak muncul -->
                    <button
                      type="button"
                      v-show="updateSubmit"
                      @click="updatebali(formbali)"
                    >
                      edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      @click="close"
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Database -->
      <table class="table" border="1" style="width: 90%">
        <tr class="tr">
          <th>kota/kab</th>
          <th>kota/kab</th>
          <th>ukuran</th>
          <th>jumlah.kecamatan</th>
          <th>wali kota</th>
          <th>lambang</th>
          <th>action</th>
        </tr>

        <tr class="tr" v-for="(bali, index) in balis" :key="bali.id">
          <td>
            <span class="bb"> {{ index + 1 }}</span> &#160;
          </td>
          <td>
            <span class="bb"> {{ bali.kota }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ bali.ukuran }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ bali.jumlah }}</span> &#160;
          </td>
          <td>
            <span class="bb">{{ bali.iconkota }}</span>
            &#160;
          </td>
          <td>
            <span><img :src="bali.image" alt="" width="100px" /></span>
            &#160;
          </td>

          <td class="btn2">
            <a href="#exampleModalLabel">
              <button
                data-bs-toggle="modal"
                data-bs-target="#bali"
                class="aa"
                @click="editbali(bali)"
              >
                <i class="fas fa-wrench"></i>Edit
              </button></a
            >
            <button class="aa" @click="del(bali)">
              <i class="fas fa-trash-alt"></i>Delete
            </button>
          </td>
        </tr>
      </table>
      <a href="../view/Home.vue"
        ><div class="kembali"><button>kembali</button></div></a
      >
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import NavBar from "../components/navbar.vue";
export default {
  name: "HomePage",
  components: {
    NavBar,
  },
  mounted() {
    if (!sessionStorage.getItem("USER_DATA")) {
      this.$router.push("/");
    }
    this.load();
    this.loadbali();
  },

  data() {
    return {
      form: {
        id: "",
        kota: "",
        ukuran: "",
        jumlah: "",
        iconkota: "",
        image: "",
      },
      jakartas: "",
      updateSubmit: false,
      formbali: {
        id: "",
        kota: "",
        ukuran: "",
        jumlah: "",
        iconkota: "",
        image: "",
      },
      balis: "",
      updateSubmit: false,
    };
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/jakartas")
        .then((res) => {
          this.jakartas = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },
    loadbali() {
      axios
        .get("http://localhost:3000/balis")
        .then((res) => {
          this.balis = res.data; //respon dari rest api dimasukan ke users
        })
        .catch((err) => {
          console.log(err);
        });
    },

    add() {
      axios.post("http://localhost:3000/jakartas/", this.form).then((res) => {
        this.load();
        (this.form.kota = ""),
          (this.form.ukuran = ""),
          (this.form.jumlah = ""),
          (this.form.iconkota = ""),
          (this.form.image = "");
      });
    },
    addbali() {
      axios.post("http://localhost:3000/balis/", this.formbali).then((res) => {
        this.loadbali();
        (this.formbali.kota = ""),
          (this.formbali.ukuran = ""),
          (this.formbali.jumlah = ""),
          (this.formbali.iconkota = ""),
          (this.formbali.image = "");
      });
    },

    edit(jakarta) {
      this.updateSubmit = true;
      this.form.id = jakarta.id;
      this.form.kota = jakarta.kota;
      this.form.ukuran = jakarta.ukuran;
      this.form.jumlah = jakarta.jumlah;
      this.form.iconkota = jakarta.iconkota;
      this.form.image = jakarta.image;
    },
    editbali(bali) {
      this.updateSubmit = true;
      this.form.id = bali.id;
      this.form.kota = bali.kota;
      this.form.ukuran = bali.ukuran;
      this.form.jumlah = bali.jumlah;
      this.form.iconkota = bali.iconkota;
      this.form.image = bali.image;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/jakartas/" + form.id, {
          kota: this.form.kota,
          ukuran: this.form.ukuran,
          jumlah: this.form.jumlah,
          iconkota: this.form.iconkota,
          image: this.form.image,
        })
        .then((res) => {
          this.load();
          this.form.id = "";
          this.form.kota = "";
          this.form.ukuran = "";
          this.form.jumlah = "";
          this.form.iconkota = "";
          this.form.image = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updatebali(formbali) {
      return axios
        .put("http://localhost:3000/balis/" + formbali.id, {
          kota: this.formbali.kota,
          ukuran: this.formbali.ukuran,
          jumlah: this.formbali.jumlah,
          iconkota: this.formbali.iconkota,
          image: this.formbali.image,
        })
        .then((res) => {
          this.load();
          this.formbali.id = "";
          this.formbali.kota = "";
          this.formbali.ukuran = "";
          this.formbali.jumlah = "";
          this.formbali.iconkota = "";
          this.formbali.image = "";
          this.updateSubmit = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(jakarta) {
      axios
        .delete("http://localhost:3000/jakartas/" + jakarta.id)
        .then((res) => {
          this.load();
          let index = this.jakartas.indexOf(
            form.kota,
            form.ukuran,
            form.jumlah,
            form.iconkota,
            form.image
          );
          this.jakartas.splice(index, 1);
        });
    },
    // close
    close() {
      window.location.reload();
    },
  },
};
</script>
<style>
.induk {
  background-color: tomato;
  width: auto;
  margin-right: 10px;
}

.jakarta {
 
  font-family: "Bungee Inline", cursive;

  width: auto;
}
.jakarta label {
  justify-content: center;
}

.btn1 button {
  font-family: "Bungee Inline", cursive;
  color: white;
  background-color: red;
  border-radius: 20px;
  height: 50px;
  text-align: center;
  border: 2px solid red;
}
.btn11 button {
  background-color: red;
  width: 200px;
  margin-left: 550px;
}
.btn1 :hover {
  background-color: salmon;
}
.btn2 :hover {
  background-color: salmon;
}
.table {
  margin-right: 40px;
  padding-bottom: 20px;
}
.table th {
  border: 1px solid;
}
.table td {
  border: 1px solid black;
  font-family: sans-serif;
  text-align: center;
}

.aa {
  background-color: red;
  border: none;
}
.bb {
  font-family: "Bungee Inline", cursive;
}
.tr th {
  font-family: "Bungee Inline", cursive;
  text-align: center;
}
.tr button {
  font-family: "Bungee Inline", cursive;
  width: 100px;
  background-color: red;
  border-radius: 20px;
  height: 50px;

  color: white;
}
</style>
