<template>
<div>
    <NavBar />
  <div class="induk" style=" background-color: tomato;">
    

    
    <table class="table" border="1" style="width:100%;">
   <tr class="tr">
    <th>kota/kab</th>
   <th>ukuran</th>
   <th>jumlah.kecamatan</th>
   <th>wali kota</th>
   <th>lambang</th>
 
   </tr>

       
          <tr class="tr" v-for="jakarta in jakartas" :key="jakarta.id">
            
        <td> <span class="bb"> {{jakarta.kota }}</span>
      &#160;</td>
        <td> <span class="bb">{{jakarta.ukuran }}</span>
      &#160;</td>
       <td>  <span class="bb">{{jakarta.jumlah }}</span>
      &#160;</td>
        <td> 
      <span class="bb">{{jakarta.iconkota }}</span>
      &#160;</td>
        <td > 
    <span><img :src=jakarta.image alt="" width="100px"></span>
      &#160;</td>
      <!-- <td class="btn2">
        <button class="aa" @click="edit(jakarta)"><i class="fas fa-wrench"></i>Edit</button> 
          <button class="aa" @click="del(jakarta)"><i class="fas fa-trash-alt"></i>Delete</button>
      </td> -->
      </tr>
      
    </table>
    <br>
    <br>
    <!-- bali -->
    <table class="table" border="1" style="width:100%;">
   <tr class="tr">
    <th>kota/kab</th>
   <th>ukuran</th>
   <th>jumlah.kecamatan</th>
   <th>wali kota</th>
   <th>lambang</th>
 
   </tr>

       
          <tr class="tr" v-for="bali in balis" :key="bali.id">
            
        <td> <span class="bb"> {{bali.kota }}</span>
      &#160;</td>
        <td> <span class="bb">{{bali.ukuran }}</span>
      &#160;</td>
       <td>  <span class="bb">{{bali.jumlah }}</span>
      &#160;</td>
        <td> 
      <span class="bb">{{bali.iconkota }}</span>
      &#160;</td>
        <td > 
    <span><img :src=bali.image alt="" width="100px"></span>
      &#160;</td>
      <!-- <td class="btn2">
        <button class="aa" @click="edit(jakarta)"><i class="fas fa-wrench"></i>Edit</button> 
          <button class="aa" @click="del(jakarta)"><i class="fas fa-trash-alt"></i>Delete</button>
      </td> -->
      </tr>
      
    </table>
    <a href="atas"><div class="kembali"><button>kembali</button></div></a>
  </div>
  </div>
</template>
<script>
import NavBar from "../components/navbar.vue";
/* eslint-disable */
import axios from "axios";
export default {
    name:"ProdukPage",
    components: {
    NavBar,
  },
 data(){
    return{
        formjakarta: {
          id: "",
          kota: "",
          ukuran: "",
          jumlah: "",
          iconkota: "",
          image: "",
        },
        jakartas: '',
        updateSubmit: false,
         formbali: {
          id: "",
          kota: "",
          ukuran: "",
          jumlah: "",
          iconkota: "",
          image: "",
        }, 
         balis: '',
        updateSubmit: false,
    }
  },
  mounted() {
    this.loadjakarta();
    this.loadbali();
  },
  methods: {
    loadjakarta() {
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
    
    
  },
    
 add(){
      axios.post('http://localhost:3000/jakartas/', this.form).then(res => {
          this.load()
          this.form.kota = "",
          this.form.ukuran = "",
          this.form.jumlah = "",
          this.form.iconkota = "",
          this.form.image = ""
      })
 },
  edit(jakarta){ 
        this.updateSubmit = true
        this.form.id = jakarta.id 
        this.form.kota = jakarta.kota 
        this.form.ukuran = jakarta.ukuran
        this.form.jumlah = jakarta.jumlah 
        this.form.iconkota = jakarta.iconkota 
        this.form.image = jakarta.image
 },
 update(form){
        return axios.put('http://localhost:3000/jakartas/' + form.id , {kota: this.form.kota,ukuran: this.form.ukuran,
        jumlah: this.form.jumlah,iconkota: this.form.iconkota,image: this.form.image}).then(res => {
        this.load()
        this.form.id = ''
        this.form.kota = ''
        this.form.ukuran = ''
        this.form.jumlah = ''
        this.form.iconkota = ''
        this.form.image = ''
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
    },
      del(jakarta){
      axios.delete('http://localhost:3000/jakartas/' + jakarta.id).then(res =>{
          this.load()
          let index = this.jakartas.indexOf(form.kota,
          form.ukuran,form.jumlah,form.iconkota,form.image)
          this.jakartas.splice(index,1)
      })
  }
  }

</script>
<style>
.induk{
   background-color: tomato;
}
.jabar img{width: auto;
height: 100px;
}

.jakarta{
    display: flex;
    justify-content: space-around;
    font-family: 'Bungee Inline', cursive;
    padding-left: 20px;
    padding-right: 20px;
    gap: 20px;
  
}
.jakarta label{
  justify-content: center;
}
.jakarta button{
  font-family: 'Bungee Inline', cursive;
   color: white;
    background-color: red;
    border-radius: 20px;
  height: 50px;
  margin-top: 30px;
  ;
    text-align: center;
    border: 2px solid red;
}
.btn1 :hover{
  background-color: salmon;
}
.btn2 :hover{
  background-color: salmon;
}
.table {padding-left: 15px;
padding-right: 20px;
padding-bottom: 20px;
}
.table th {
    border: 1px solid;
    
}
.table td{
    border: 1px solid black;
    font-family: sans-serif;
    text-align: center;
}

.aa{
  background-color: red;
  border: none;
 
}
.bb{
  
  font-family: 'Bungee Inline', cursive;
}
.tr th{
  font-family: 'Bungee Inline', cursive;
}
.tr button{
  font-family: 'Bungee Inline', cursive;
   width: 100px;
    background-color: red;
    border-radius: 20px;
  height: 50px;
  margin-left:20px ;
  color: white;
 
}
</style>
