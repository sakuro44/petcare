<template>
  <div class="header container-fluid">
    <div>
      <nav>
        <Navbar />
      </nav>
    </div>
    <h3 class="text-center mb-5 text-uppercase">
      <b style="color: rgb(27, 119, 218);">ค่าบริการอาบน้ำตัดขนสุนัข</b>
    </h3>
    <div>
      <div class="text-center">
        <img src="https://www.thonglorpet.com/_content_images/promotion/20220331/agijlmv46789.jpg" class="rounded"
          alt="...">
      </div>
      <div class="kl text-center" >
        <img style="width: 50pc;"
          src="https://thonglorpetshop.com/wp-content/uploads/2020/01/650.-6.png"
          class="rounded" alt="...">
      </div>
    </div>

  </div>



  <footer>
    <Footer />
  </footer>


</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue"
</script>

  
<style lang="scss">
* {
  font-family: "Kanit", sans-serif;
}
h3{
  padding-top: 30px;
}
.kl{
  padding-top:50px;
}
</style>

